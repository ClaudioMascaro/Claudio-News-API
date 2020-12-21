import * as mongoose from 'mongoose'
import { config } from '../config/config'

mongoose.connect(config.mongodb, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then((db) => {
    console.log("Conectado com a base de dados!")
}).catch((err) =>{
    console.log("Erro ao conectar com a base de dados")
})

export default mongoose