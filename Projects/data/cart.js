/* ------------------------------cart data---------------------------- */
export let cart = [{
    productId: 'a1',
    quantity: 1
}, {
    productId: 'a2',
    quantity: 1
}, {
    productId: 'a3',
    quantity: 1
}];

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;
}