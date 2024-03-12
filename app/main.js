import express from 'express'
const app = express()

import routerApp from './routes/index.js'
app.use(express.json())
routerApp(app)

const PORT = process.env.PORT || 4000
app.listen( PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`)
})
