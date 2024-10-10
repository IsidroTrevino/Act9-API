import express from 'express'
import usuarioRoute from './routes/usuario.routes.js'
import recibosRoute from './routes/recibos.routes.js'

const app = express()

app.use(express.json())

app.use('/api', usuarioRoute)
app.use('/api', recibosRoute)

app.listen(3000);
console.log('Server on port', 3000);