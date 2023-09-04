import menu from './menu.js'
import {addToCart, cart, getCartFromStorage, removeFromCart} from './cart.js'

const renderCocktail = (container, cocktail) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `
        <div class="container">
            <img src="/foto drink/${cocktail.picture}" class="rounded mx-auto">
            <h2>${cocktail.name}</h2>
            <p> ${cocktail.ingredients}</p>
            <p>${cocktail.category}</p>
            <p>${cocktail.price}</p>
            <button data-cocktail="${cocktail.name}" class="btn btn-outline-primary add-to-cart">Aggiungi al carrello</button>
            <button data-cocktail="${cocktail.name}" class="btn btn-outline-secondary remove-from-cart">Rimuove dal carrello</button>
        </div>
        `
    container.append(listItem)
    document.querySelector(`.add-to-cart[data-cocktail="${cocktail.name}"]`).addEventListener('click', () => addToCart(cocktail))
    document.querySelector(`.remove-from-cart[data-cocktail="${cocktail.name}"]`).addEventListener('click', () => removeFromCart(cocktail))
}

function renderMenu(menuToRender = menu) {
    const menuContainer = document.querySelector('#menu-container')
    menuContainer.innerHTML = ''


    menuToRender.forEach((cocktail) => {
        renderCocktail(menuContainer, cocktail)
    })
}

function renderCart() {
    const cartContainer = document.querySelector('#cart-container')
    cartContainer.innerText = cart.total
}

function renderUpdatedCart() {
    document.querySelector('#cart-container').innerText = cart.total
}

function renderApp() {
    renderMenu()
    renderCart()
}
function visualCart(){
const checkout= getCartFromStorage()
console.log(checkout)
document.querySelector('#checkoutCart').innerHTML =
    checkout.total
    console.log('ciaoo')

}


export {
    renderMenu,
    renderCart,
    renderUpdatedCart,
    renderApp,
    
}
