
const addToCartButtons = document.querySelectorAll('.btnAgregar');
addToCartButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClick);
});

// variable contenedora de los items agregados al carrito 
const shopCartContainer = document.querySelector('.carrito-container');

function addToCartClick(event) {
    const button = event.target;
    const item = button.closest('.card-item');

    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.card-price').textContent;

    addItemToCart(itemTitle, itemPrice);
}

function addItemToCart(itemTit, itemPri) {
    const cartRow = document.createElement('div');
    const cartContent =  `
    <div class="item-carro">
        <div class="inrow inrow-justify">
    
        <div class="border-grey item-name">
            <p class="color-white">${itemTit}</p>
        </div>
        <div class="inrow inrow-gap">
            <div class="border-grey item-detail">
                <p class="color-white item-price">${itemPri}</p>
            </div>
            <div class="border-grey item-detail">
            <input class="color-crimson item-cantidad input-size" type="number"
            value="1">
            <button class="btn buttonDelete" type="button">X</button>
            </div>
        </div>            

        </div>
    </div>`;
    cartRow.innerHTML = cartContent;
    console.log(cartRow)
    
    shopCartContainer.append(cartRow);

    actualizarTotalCarrito();
}

function actualizarTotalCarrito() {
    let total = 0;

    const cartTotal = document.querySelector('.cart-Total');

    const cartItems = document.querySelectorAll('.item-carro');

    cartItems.forEach((itemCarro) => {
        const itemCartPriceElement = itemCarro.querySelector('.item-price');

        const itemCartPrice = Number(itemCartPriceElement.textContent.replace('$', ''));
        
        const itemCartCantidadElement = itemCarro.querySelector('.item-cantidad');

        const itemCartCantidad = Number(itemCartCantidadElement.value)

        total = total + itemCartPrice * itemCartCantidad;

    });

    cartTotal.innerHTML = `$${total}`;
}


