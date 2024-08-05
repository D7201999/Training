let products=[{
    id:1,
    name:'Apple iPhone 15 (128 GB) - Pink',
    price:'₹70,999' ,
    image:'https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY218_.jpg',
    delivery:'FREE delivery Sat, 13 Jul'
},
{
    id:2,
    name:'Sponsored Ad - Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage)',
    price:'₹19,999 ',
    image:'https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY218_.jpg',
    delivery:' fastest delivery Tomorrow, 12 Jul'
},
{
    id:3,
    name:`Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera`,
    price:'₹8,499',
    image:'https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UY218_.jpg',
    delivery:'FREE delivery Sat, 13 Jul'

},
{
    id:4,
    name:'POCO C65 (Pastel Blue 6GB RAM 128GB Storage)',
    price:'₹7,498',
    image:'https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY218_.jpg',
    delivery:'fastest delivery Tomorrow, 12 Jul'

}]
let productsHtml='';
products.forEach(product => {
    productsHtml+=` <div class="row first">
    <div class="col-3"><img  class='image'src="${product.image}">
      
          </img>
        </div>
          <div class="col-9"> <h5>${product.name}</h5>
          <span>${product.price}</span><br></br>
          <p>${product.delivery}</p>
          <button class='cart js-cart' onclick="clas(${product.id})" data-product-id="${product.id}">Add to cart</button>
          <span class="cart-items1"></span></div>
          </div>`;
    
});
document.querySelector('.elements').innerHTML=productsHtml;
let cart=[];
let count=0;
let cart_images='';
document.querySelectorAll('.js-cart').forEach(button =>{
    let id=button.dataset.productId;
    console.log(id);
    let item={
        
        productId:id
    }
    cart.push(item);
});
function clas(id){
    products.forEach((product)=>{
            if(product.id===id){
                count+=1;
                cart_images+=`<div class="row first">
                <div class="col-3 image" ><img  class='image'src="${product.image}">
                  
                      </img>
                    </div>
                      <div class="col-9"> <h5>${product.name}</h5>
                      <span>${product.price}</span><br></br>
                      <p>${product.delivery}</p>
                      <button class='order' onclick="cart1()" data-product-id="${product.id}">Place order</button>
                      <button class='remove' >Remove</button>
                      </div>
                      </div>`;

            }

        
    });
    localStorage.setItem('count',count);
    localStorage.setItem('cartImages',cart_images);
}


