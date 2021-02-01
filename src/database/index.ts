import * as mongoose from 'mongoose'

const { DB_HOST, DB_PORT, DB_NAME } = process.env

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then((db) => {
    console.log("Conectado com a base de dados!")
    }).catch((err) =>{
    console.log("Erro ao conectar com a base de dados")
    }
)

export default mongoose