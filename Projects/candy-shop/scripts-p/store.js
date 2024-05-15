import {products} from '../data/product.js'
import {cart, addTocart} from '../data/cart.js';

let productsHtml = '';

products.forEach((product) => {
    productsHtml += `
    <div class="product-container">
    <div class="img-container">
      <img src="../product-images/${product.image}" alt="product-image">
    </div>

    <p class="product-name">${product.name}</p>
    <div class="product-details">
      <div className="price">
        <p>MRP &#x20b9;${((product.priceCents)/100).toFixed(2)}/-</p>
        <p>Wholesale rate: &#x20b9; ${(product.wholesaleRate/100).toFixed(2)} /-<p>
      </div>
      <div className="cart">
      <i class="fa-solid a-shopping-bag js-add-to-cart" data-product-id="${product.productId}"><span> ~O~</span></i>
      </div>
    </div>
  </div> `;

})

document.querySelector('.container').innerHTML = productsHtml;

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