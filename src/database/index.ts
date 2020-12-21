import * as mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/claudionews", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then((db) => {
    console.log("MongoDB conectado")
}).catch((err) =>{
    console.log("Erro ao conectar com a base de dados")
})

export default mongoose