import NewsletterService from '../services/NewsletterSubscriptionService'
import { Request, Response } from 'express'


interface Results {
  next?: {
    page: number,
    limit: number
  },
  previous?: {
    page: number,
    limit: number
  },
  results?: Array<object>
}

export default new class Newsletter {
  async include (request: Request, response: Response) {
    try {
      const { email } = request.body	
      await NewsletterService.subscribe(email)
      return response.status(201).json({ message: "E-mail cadastrado com sucesso!"})
    } catch (err) {
      return response.status(400).json('E-mail inválido ou já cadastrado')
    }
  }

  async find (request: Request, response: Response) {
    try {
      const page = parseInt(request.query.page as string)
      const limit = parseInt(request.query.limit as string)
      const order = parseInt(request.query.order as string)
      const sortBy = request.query.sortby as string
      
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
      const results: Results = {}

      if (endIndex < await NewsletterService.count()
      ) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      } 
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
      }
      results.results = await NewsletterService.find(limit, sortBy, order, startIndex)
      return response.status(200).json(results)
    }
    catch (err) {
      return response.status(400)
    }
  }
}
