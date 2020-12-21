import { Router } from 'express';
import newsletterRouter from './newsletter.routes'

const routes = Router();

routes.use('/newsletter', newsletterRouter)

export default routes
