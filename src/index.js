import express from 'express'
import usuarioRoute from './routes/usuario.routes.js'
import recibosRoute from './routes/recibos.routes.js'

const app = express()

/*
    La estructura del codigo de esta api se basa en el patron de diseño por capas, esto es debido a que el api esta 
    organizada en capas separadas, cada una con una responsabilidad especifica, esto permite que el codigo sea mas 
    facil de mantener y de entender, ademas de que se puede reutilizar facilmente. Como se puede observar las dos 
    capas principales son la capa de usuarios y la capa de recibos, cada una de manejar informacion de usuarios y
    recibos respectivamente.
*/

app.use(express.json())

app.use('/api', usuarioRoute)
app.use('/api', recibosRoute)

app.listen(3000);
console.log('Server on port', 3000);