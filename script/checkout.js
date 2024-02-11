import {cart, removeFromCart} from '../Projects/data/cart.js';
import {products} from '../Projects/data/product.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'

const today = dayjs();
let deliveyDate = today.add(7,'days');
deliveyDate = deliveyDate.format('DD MMM, dddd');
console.log(deliveyDate);


let cartSummaryHtml = '';
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

    cartSummaryHtml +=
    `
    <div class="product-box js-product-box-${matchingProduct.productId}">
        <div class="product1">
            <div class="image">
                <img src="${matchingProduct.image}" alt="">
            </div>
            <div class="details">
                <div class="product-details">
                    <p class="product-name">${matchingProduct.name}</p>
                    <input placeholder="${cartItem.quantity}" type="number">
                    <div>
                        <p>$${(matchingProduct.priceCents/100).toFixed(2)}</p>
                        <button class="js-delete-link" data-product-id="${matchingProduct.productId}">Remove</button>
                    </div>
                </div>
                <div class="addition">
                    <p>
                        Add gift wrap and letter for someone <span style="font-weight:bold;">$3/-</span></p>
                        <button>Add</button>
                </div>
                <div class="order">
                    <p>Order today.Delivers to 400011††
                        <span style="color:green; font-weight:bolder;">${deliveyDate}— Free</span></p>
                    <p>Order now. Pick up, in-store:
                        Today at Store.</p>
                </div>
            </div>
        </div>
    </div>
    `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHtml;

cart.forEach((quantity) => {
    totalValue *= quantity.quantity;
})

function updatePrice() {
    document.querySelector('.js-total-amount').innerHTML = `$${((totalValue)/100).toFixed(2)}`;
    document.querySelector('.js-total-amounts').innerHTML = `$${(totalValue)/100}`;
    document.querySelector('.js-total-amountss').innerHTML = `$${((totalValue)/100).toFixed(2)}`;
}

updatePrice();


document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            

            const container = document.querySelector(`.js-product-box-${productId}`);
            container.remove();
        });
    });