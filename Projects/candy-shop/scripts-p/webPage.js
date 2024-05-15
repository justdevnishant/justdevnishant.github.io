import {cart, addTocart} from '../data/cart.js';
import {products} from '../data/product.js';

let productsHtml = '';

let showCase = '';

products.slice(8,20).forEach((product) => {
    showCase += `
        <div class="products-showcase">
        <img src="./product-images/${product.image}" alt="product-image">
        </div> `
})

products.slice(0,10).forEach((product) => {
    productsHtml += `
        <div class="select-pro">
            <div>
                <img src="./product-images/${product.image}" alt="product-image">

                <p class="product-name">${product.name}</p>
                <div class="select-details">
                    <div class="pricing">
                        <p>MRP &#x20b9; ${(product.priceCents/100).toFixed(2)} /-</p>
                        <p>Wholesale Rate: &#x20b9;${(product.wholesaleRate/100).toFixed(2)} /-</p>
                    </div>  
                    <div>
                        <i class="fa-solid a-shopping-bag js-add-to-cart" data-product-id="${product.productId}">~O~</i>
                    </div>  
                </div>      
            </div>
        </div> `;
})

document.querySelector('.js-showcase').innerHTML = showCase;

document.querySelector('.js-products-grid').innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        addTocart(productId);
        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;
        })

        document.querySelector('.js-cart').innerHTML = cartQuantity;
    });
});