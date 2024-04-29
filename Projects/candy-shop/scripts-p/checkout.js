import {cart, removeFromCart} from '../data/cart.js';
import {products} from '../data/product.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'
import { updatePrice } from '../data/priceManager.js';

const today = dayjs();
let deliveyDate = today.add(7,'days');
deliveyDate = deliveyDate.format('DD MMM, dddd');

function renderOrderSummary(){

    let cartSummaryHtml = '';
    cart.forEach((cartItem) => {

        const productId = cartItem.productId;

        let matchingProduct;

        products.forEach((product) => {
            if (product.productId === productId) {
                matchingProduct = product;
            }
        });

        cartSummaryHtml +=
        `
        <div class="product-box js-product-box-${matchingProduct.productId}">
            <div class="product1">
                <div class="image">
                    <img src="./product-images/${matchingProduct.image}" alt="">
                </div>
                <div class="details">
                    <div class="product-details">
                        <p class="product-name">${matchingProduct.name}</p>
                        <p>${cartItem.quantity}</p>
                        <div>
                            <p>&#x20b9;${(matchingProduct.priceCents/100).toFixed(2)}</p>
                            <button class="dark-back js-delete-link update-price" data-product-id="${matchingProduct.productId}">Remove</button>
                        </div>
                    </div>
                    <div class="addition">
                        <p>Add gift wrap and letter for someone <span style="font-weight:bold;"> &#x20b9;50/-</span></p>
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

    document.querySelectorAll('.update-price').forEach((element) => {
        element.addEventListener('click', () => {
            updatePrice();
            renderOrderSummary();
        })
    })
};

renderOrderSummary();