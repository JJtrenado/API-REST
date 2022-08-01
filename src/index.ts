import express from 'express' //para que esto no de error tenemos que instalar: npm install @types/express -D
const app = express()

app.use(express.json()) //midelware que transforma la req.body a un json

//creamos el puerto
const PORT = 3000
//creamos el endpoint llamado ping con request y response
app.get('/ping', (_req, res) =>{
  console.log('someone pinged here!!')
  res.send('pong')
})

app.listen(PORT, ()=>{
  console.log(`server running on port ${PORT}`)
})