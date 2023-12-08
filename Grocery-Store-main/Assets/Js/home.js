document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('product-container');
  
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        productsContainer.innerHTML = products.map(product => `
          <div class="product">
            <img src="${product.image}" alt="${product.title}">
            <p>${product.title}</p>
            <p>$${product.price}</p>
            <button class="btn-add" onclick="showProductDetail(${product.id})">Show More</button>
          </div>`).join('');
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  
  function showProductDetail(productId) {
    localStorage.setItem('selectedProductId', productId);
    window.location.href = 'Page detail.html';
  }