import {dispatchUpdateCartTotal} from "./events.js";
import {renderUpdatedCart} from "./renderer.js";

const cart = {
    total: 0,
    items: {}
}
document.addEventListener('update-cart-total', () => {
    calculateTotal()
    renderUpdatedCart()
})

function findItemByName (cocktailName) {
    return cart.items[cocktailName]
}

function updateItemQuantity (cocktail) {
    cart.items[cocktail.name] = {
        ...cart.items[cocktail.name],
        quantity: cart.items[cocktail.name].quantity + 1
    }
}

function addItemToCart(cocktail) {
    cart.items[cocktail.name] = {
        quantity: 1,
        price: cocktail.price
    }
}

function addToCart(cocktail) {
    const itemInCart = findItemByName(cocktail.name)

    // Se l'elemento è nel carrello, aggiorno la quantità, altrimenti lo aggiungo
    if (itemInCart) {
        updateItemQuantity(cocktail)
    } else {
        addItemToCart(cocktail)
    }

    dispatchUpdateCartTotal(cart)
}

function calculateTotal() {
    cart.total = Object.values(cart.items).reduce((acc, cocktail) => {
        acc += Number(cocktail.price) * Number(cocktail.quantity)
        return acc
    },0 )
}

function removeFromCart(cocktail) {
    if(cart.items[cocktail.name] && cart.items[cocktail.name].quantity > 0) {
        cart.items[cocktail.name].quantity -= 1 
    }

    dispatchUpdateCartTotal(cart)
}
 function getCartFromStorage(){
    return  localStorage.getItem("cart" )

 }

export {
    cart,
    addToCart,
    removeFromCart,
    getCartFromStorage
}
