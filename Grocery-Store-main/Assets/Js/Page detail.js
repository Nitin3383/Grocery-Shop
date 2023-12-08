const productId = localStorage.getItem('selectedProductId');

fetch(`https://fakestoreapi.com/products/${productId}`)
  .then(response => response.json())
  .then(product => {
    const productDetailsElement = document.getElementById('product-details');
    productDetailsElement.innerHTML = `

      <img class ="page-img" style="height:20vh"; src="${product.image}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>Description: ${product.description}</p>
      <p>Price: $${product.price}</p>

<label>Select a Quantity</label>

<select name="cars" id="items">
  <option value="">1</option>
  <option value="">2</option>
  <option value="">3</option>
  <option value="">4</option>
  <option value="">5</option>
  <option value="">6</option>
  <option value="">7</option>
  <option value="">8</option>
  <option value="">9</option>
  <option value="">10</option>

</select>

  
<button onclick="add(${product.id})" class="btn-add">Add to Cart</button>
<a  href="buy.html">
  <button class="btn-add">Buy Now</button>
</a>

`;
  })
  .catch(error => console.error('Error While fetching :', error));


function add(productId) {
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
      const cartData = JSON.parse(localStorage.getItem("cart")) || [];

      const existingProduct = cartData.find(item => item.id === productId);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cartData.push({ id: productId, title: product.title, price: product.price, description: product.description, image: product.image });
      }

      localStorage.setItem("cart", JSON.stringify(cartData));

      updateCartItems();
    });
}


function updateCartItems() {
  
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];

  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";

  for (const item of cartData) {
    const cartItemElement = document.createElement("hh");
    cartItemElement.innerHTML = `
        <img class ="page-img" style="height:20vh" src="${item.image}">
        <p>Title: ${item.title}</p>
        <p>Price:${item.price}</p>
        <p style="color:red">Total Price:$${item.price}</p>

        <button style="background-color:skyblue"; onclick="cart()";data-product-id="${item.id}">Delete</button>



        
      `;

    cartItemsElement.appendChild(cartItemElement);
  }
}
function deletecart(){
localStorage.removeItem("cart")
window.location.replace("Page detail.html")
}