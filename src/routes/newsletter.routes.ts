import { Router } from 'express'
import mongoose from '../database'
import '../models/Mailing'

const Mailing = mongoose.model('Mailing')
const newsletterRouter = Router()

newsletterRouter.post('/', async (request, response) => {
  try {
    const { email } = request.body
    const mailing = new Mailing ({email: email})
    await mailing.save()
    response.status(201).json({message: "E-mail cadastrado com sucesso."})
  }
  catch (err) {
    response.status(400).json({ message: "E-mail já cadastrado!" })
  }
})

export default newsletterRouter
