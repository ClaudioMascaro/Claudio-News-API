import * as express from "express"; 
import { Application } from 'express';
import './database'
import routes from './routes'
import * as cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(routes)


app.listen(3333, () =>{
  console.log('Back-end rodando ༼ つ ◕_◕ ༽つ')
})
