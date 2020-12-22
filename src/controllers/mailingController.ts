import NewsletterService from '../services/NewsletterSubscriptionService'
import { Request, Response } from 'express'


export default new class Newsletter {
  async include (request: Request, response: Response) {
    try {
      const { email } = request.body	
      await NewsletterService.subscribe(email)
    return response.status(201).json({ message: "E-mail cadastrado com sucesso!"})
  }
  catch (err) {
    const Response = response.status(400).json({ message: "E-mail invalido ou já cadastrado!" })
    return Response
  }
}

  async find (request: Request, response: Response) {
    try {
      const mailing = await NewsletterService.find()
      const Response = response.status(200).json(mailing)
      return Response
    }
    catch (err) {
      const Response = response.status(400)
      return Response
    }
  }
}
