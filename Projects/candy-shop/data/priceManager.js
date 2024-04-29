import { products } from "./product.js";
import {cart} from './cart.js';

export function updatePrice() {
    let totalValue = 0;
    let value = 0;

    cart.forEach((cartItem) => {

        const productId = cartItem.productId;
    
        let matchingProduct;
    
        products.forEach((product) => {
            if (product.productId === productId) {
                matchingProduct = product;
                totalValue += matchingProduct.priceCents * cartItem.quantity;
            }
        });
    });

    if (totalValue === 0) {
        document.querySelector('.empty-cart').innerHTML = `
        <div class="product-box">
            <h1>Sweetness None! Add Some {:=)</h1><br><br><br>
            <img src="https://www.iconeasy.com/icon/256/System/Swirl%20Finder/Finder%20Candy.png">
        </div>
        `;
    } else {
        true;
    }
    document.querySelector('.js-total-amount').innerHTML = `&#x20b9;${((totalValue)/100).toFixed(2)}`;
    document.querySelector('.js-total-amounts').innerHTML = `&#x20b9;${(totalValue)/100}`;
    document.querySelector('.js-total-amountss').innerHTML = `&#x20b9;${((totalValue)/100).toFixed(2)}`;
    
}