const productos = [

    {id: 1, name: 'Producto Nro 1'},
    {id: 2, name: 'Producto Nro 2'},
    {id: 3, name: 'Producto Nro 3'},
    {id: 5, name: 'Producto Nro 5'},

]

const all = () => {
    return productos
}

const find = (id) =>{
    return productos.find(producto => producto.id == id)
}

module.exports = {
    all: all,
    find: find
}


