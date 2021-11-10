let productos = [];
let productosCarrito = [];


function Productos(nombre,precio) {
    this.nombre = nombre;
    this.precio = precio;
}


let producto1 = new Productos("Churrasquito simple", 540);
let producto2 = new Productos("Hamburguesa", 540);

productos.push(producto1,producto2);

for (const producto of productos) {
    $("#contenedor").append(`<div>
    <p> Nombre : ${producto.nombre} </p>
    <p> Precio : ${producto.precio} </p>
    <button onclick=agregarACarrito("hola") id="btn${producto.nombre}">COMPRAR</button>
    </div>`);
    //$(`#btn${producto.nombre}`).on("click", agregarACarrito)
    }

function agregarACarrito(name) {
    alert(name);
}



