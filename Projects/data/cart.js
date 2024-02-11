/* ------------------------------cart data---------------------------- */
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [{
        productId: 'a1',
        quantity: 1
    }, {
        productId: 'a2',
        quantity: 1
    }, {
        productId: 'a3',
        quantity: 1
    }];
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addTocart(productId) {

        let matchingItem;
        cart.forEach((item) => {
            if (productId === item.productId){
                matchingItem = item;
            }
        });

        if (matchingItem){
            matchingItem.quantity+=1;
        } else{
            cart.push({
                productId: productId,
                quantity: 1
            });
        }

        saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}

