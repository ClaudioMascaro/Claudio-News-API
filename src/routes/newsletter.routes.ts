import { Router } from 'express'
import Newsletter from '../controllers/mailingController'

const newsletterRouter = Router()

newsletterRouter.post('/', async (req, res) =>{
  try {
    const {email} = req.body
    const newsletterSubscription = new Newsletter()
    await newsletterSubscription.include(email)
    res.status(201).json({ message: "E-mail cadastrado com sucesso!"})
  }
  catch (err) {
    res.status(400).json({ message: "E-mail já cadastrado!" })
  }
})

newsletterRouter.get('/', async (req, res) =>{
  try {
    const newsletterSubscription = new Newsletter()
    const mailing = await newsletterSubscription.find()
    res.status(200).json(mailing)
  }
  catch (err) {
    res.status(400)
  }
})

export default newsletterRouter
