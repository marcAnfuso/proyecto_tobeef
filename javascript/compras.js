

document.getElementById("btnAgregar").addEventListener('click', cambiarNombre);

function cambiarNombre(e) {
    let productoName = e.target.parentElement.parentElement;

    productoName.querySelector("h4").textContent = "Cambiaste el nombre";

}






