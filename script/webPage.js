/* ---------------------------Products data-------------------------- */

const products = [{
    image: 'project-images/image-1.png',
    name: 'Color Candy',
    priceCents: 100,
    productId: 'a1'
},
{
    image:'project-images/image-2.png',
    name: 'Cartoon candy',
    priceCents: 90,
    productId: 'a2'
},
{
    image:'project-images/image-3.png',
    name: 'Creamy candy',
    priceCents: 200,
    productId: 'a3'
},
{
    image:'project-images/image-4.ico',
    name: 'Drawing candy',
    priceCents: 150,
    productId: 'a4'
},
{
    image:'project-images/image-4.png',
    name: 'Wrapper candy',
    priceCents: 100,
    productId: 'a5'
},
{
    image:'project-images/image-5.png',
    name: 'Wrapper creamy candy',
    priceCents: 150,
    productId: 'a6'
},
{
    image:'project-images/image-6.png',
    name: 'Wrapper stick candy',
    priceCents: 199,
    productId: 'a7'
},
{
    image:'project-images/image-7.png',
    name: 'Hypnosis candy',
    priceCents: 299,
    productId: 'a7'
},
{
    image:'project-images/image-8.png',
    name: 'Couple candy',
    priceCents: 299,
    productId: 'a8'
},
{
    image:'project-images/image-9.png',
    name: 'Sparkle candy',
    priceCents: 300,
    productId: 'a9'
},];

/* ------------------------------cart data---------------------------- */
const cart = [];

let productsHtml = '';

let showCase = '';

products.forEach((product) => {
    showCase += `
        <div class="products-showcase">
        <img src="${product.image}" alt="">
        </div> `
})

products.forEach((product) => {
    productsHtml += `
        <div class="select-pro">
        <div>
            <img src="${product.image}" alt="">
            <p>${product.name}</p>
            <span>MRP $${(product.priceCents/100).toFixed(2)} /-</span>
            <button type="button" class="js-add-to-cart" data-product-id="${product.productId}">
                <i class="fa-solid fa-shopping-bag"></i>
            </button>
        </div>
        </div> `;
})

document.querySelector('.js-showcase').innerHTML = showCase;

document.querySelector('.js-products-grid').innerHTML = productsHtml;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;

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
        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity;            
        })

        document.querySelector('.js-cart').innerHTML = cartQuantity;
        console.log(cartQuantity)
        console.log(cart);
    });
});