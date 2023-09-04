
function dispatchUpdateCartTotal(data) {
    const event = new CustomEvent('update-cart-total', data);
    document.dispatchEvent(event)

    localStorage.setItem("cart",data)
}

export {
    dispatchUpdateCartTotal
}
