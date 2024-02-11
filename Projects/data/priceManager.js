import { products } from "../data/product.js";
import {cart} from '../data/cart.js';

export function updatePrice() {
    let totalValue = 0;

    cart.forEach((cartItem) => {

        const productId = cartItem.productId;
    
        let matchingProduct;
    
        products.forEach((product) => {
            if (product.productId === productId) {
                matchingProduct = product;
                totalValue += product.priceCents;
            }
        });
    });

    cart.forEach((quantity) => {
        totalValue *= quantity.quantity;
    })
    
    

    document.querySelector('.js-total-amount').innerHTML = `$${((totalValue)/100).toFixed(2)}`;
    document.querySelector('.js-total-amounts').innerHTML = `$${(totalValue)/100}`;
    document.querySelector('.js-total-amountss').innerHTML = `$${((totalValue)/100).toFixed(2)}`;
}