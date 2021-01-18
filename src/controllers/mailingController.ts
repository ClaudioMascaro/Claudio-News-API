import NewsletterService from '../services/NewsletterSubscriptionService'
import { Request, Response } from 'express'


interface Results {
  next?: number 
  previous?: number 
  limit?: number 
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
      const searchTerm = request.query.search as string

      const startIndex = (page - 1) * limit
      const endIndex = page * limit
      const results: Results = {}

      if (endIndex < await NewsletterService.count()) {
        results.next = page + 1
        results.limit = limit
      }
       
      
      if (startIndex > 0) {
        results.previous = page - 1
        results.limit = limit
      }
      
      results.results = await NewsletterService
      .find(limit, sortBy, order, startIndex, searchTerm)
      return response.status(200).json(results)
    } catch (err) {
      return response.status(400)
    }
  }

  async delete (request: Request, response: Response) {
    try{
      const emailToDelete = request.params.id as string
      const { deletedCount } = await NewsletterService.delete(emailToDelete)
      return (deletedCount !== 0? 
        response.status(200).json("E-mail deletado") : 
        response.status(400).json("E-mail não encontrado"))
    } catch (err) {
      return response.status(400)
    }
  }
}