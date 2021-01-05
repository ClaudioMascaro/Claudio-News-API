import { Router } from 'express'
import Newsletter from '../controllers/mailingController'

const newsletterRouter = Router()

newsletterRouter.post('/', Newsletter.include)

newsletterRouter.get('/', Newsletter.find)

export default newsletterRouter
