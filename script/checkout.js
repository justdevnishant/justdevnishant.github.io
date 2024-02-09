import {cart, removeFromCart} from '../Projects/data/cart.js';
import {products} from '../Projects/data/product.js';

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
                        Add AppleCare+ for HomePod mini for ₹1600.00</p>
                        <button>Add</button>
                </div>
                <div class="order">
                    <p>Order today.Delivers to 400011††
                        Mon 12 Feb — Free</p>
                    <p>Order now. Pick up, in-store:
                        Today at Apple BKC</p>
                </div>
            </div>
        </div>
    </div>
    `;
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHtml;

console.log(totalValue);
cart.forEach((quantity) => {
    totalValue *= quantity.quantity;
})
console.log(totalValue);


document.querySelector('.js-total-amount').innerHTML = `$${(totalValue)/100}`;
document.querySelector('.js-total-amounts').innerHTML = `$${(totalValue)/100}`;
document.querySelector('.js-total-amountss').innerHTML = `$${(totalValue)/100}`;

document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);
            

            const container = document.querySelector(`.js-product-box-${productId}`);
            container.remove();
        });
    });