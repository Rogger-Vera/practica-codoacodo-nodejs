const express = require('express')
const router = express.Router()

const productos = require('./productos')


//enviamos mensajes al servidor
// router.get('/', (req, res) => {
//     res.send('Hola Express')
// })

// router.get('/productos', (req, res) => {
//     res.send('Lista de Productos')
// })

// router.get('/productos/:id', (req, res) => {
//     res.send('Producto Nro ' + req.params.id)
// })

//CREANDO VISTAS CON CONTENIDO DINAMICO

//renderizamos la vista con .render()+nombre del archivo dentro de la carpeta views
//tambien permite pasar parametros que luego pueden ir a la vista
router.get('/', (req, res) => {
    res.render('index')
})

router.get('/productos', (req, res) => {
    console.log(productos.all())
    res.render('productos/index', { productos: productos.all()})
})

router.get('/productos/:nro', (req, res) => {
    res.render('productos/show', { producto: productos.find(req.params.nro) })
})

module.exports = router
