require('dotenv').config()

const express = require('express')
const app = express()
//indicamos que vamos a requerir el modulo "express-ejs-layouts"
const expressLayouts = require('express-ejs-layouts')

//le seteamos el view engine(motor de vista) que vamos a utilizar 
app.set('view engine', 'ejs')
//indicamos que vamos a usar el modulo "expressLayouts"
app.use(expressLayouts)

app.use(express.static(__dirname + '/public'))

app.use('/', require('./router'))

// app.get('/productos/1', (req, res) => {
//     res.send('Producto 1')
// })

// app.get('/productos/2', (req, res) => {
//     res.send('Producto 2')
// })

//nos permite devolver un msj si se ingresa a una ruta que no existe. generalmente va al ultimo
app.use((req, res, next)=>{
    res.status(404).send('No existe esa pagina')
})

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`http://localhost:${port}`))







