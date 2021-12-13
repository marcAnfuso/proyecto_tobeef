let productos = [];


function Productos(nombre,precio, imgSource) {
    this.nombre = nombre;
    this.precio = precio;
    this.image =  imgSource;
}


let producto1 = new Productos("Combo Churrasquito PAÍS + fritas + bebida", 540, "img/churra-22.jpeg");
let producto2 = new Productos("Combo Hamburguesa PAÍS + fritas + bebida", 530, "img/burga2.jpeg");
let producto3 = new Productos("Hamburguesa Simple Beef + fritas", 450, "img/burga2.jpeg");
let producto4 = new Productos("Hamburguesa Doble Beef + fritas", 550, "img/doble.jpg");
let producto5 = new Productos("Hamburguesa Triple Beef + fritas", 650, "img/triple.jpg");
let producto6 = new Productos("Hamburguesa Cuádruple Beef + fritas", 750, "img/cuadru.jpg");

productos.push(producto1, producto2, producto3, producto4, producto5, producto6)


// Este bloque comentado sería la manera de cargar mis productos mediante un archivo JSON.
// Lo comenté porque cargándolos de esta manera, no tenía forma de agregar los productos al carrito.
// Por algún motivo, mi archivo JS de compras no detectaba los botones "agregar a carrito".
// Así que, tuve que cargarlos mediante un push al array de productos.

/* const URLGET = "./productos.json";

$.get(URLGET, function (respuesta) {
    let datos = respuesta;
    for (const producto of datos) {
        $(".container-items").append(`<div class="card-item">
        <img class="card-image" src="${producto.srcPhoto}" alt="">
        <h4 class="card-title">${producto.nombre}</h4>
        <p class="card-price">$${producto.price}</p>
            <button class="btnAgregar">
            Añadir al carrito
            </button>
        </div>`);
        }
}) */

for (const producto of productos) {
    $(".container-items").append(`<div class="card-item">
    <img class="card-image" src="${producto.image}" alt="">
    <h4 class="card-title">${producto.nombre}</h4>
    <p class="card-price">$${producto.precio}</p>
        <button class="btnAgregar">
        Añadir al carrito
        </button>
    </div>`);
    }



