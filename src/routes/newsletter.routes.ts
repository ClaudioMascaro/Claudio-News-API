import { Router } from 'express'
import Newsletter from '../controllers/mailingController'

const newsletterRouter = Router()

const newsletterSubscription = new Newsletter().include
const newsletterSearch = new Newsletter().find

newsletterRouter.post('/', newsletterSubscription)

newsletterRouter.get('/', newsletterSearch)

export default newsletterRouter
