import products, { searchProducts } from './ourproduct.js';

const productsContainer = document.getElementById("prod");
const cartContainer = document.getElementById("cart");
const searchInput = document.getElementById("searchInput");
let cartItems = [];

// Display products
function displayProducts(productsToDisplay = products) {
  productsContainer.innerHTML = productsToDisplay.map((product) => {
    return `<div class="card">
              <img src="${product.image}" alt="${product.name}">
              <h2>${product.name}</h2>
              <p>Price: $${product.price}</p>
              <p>Category: ${product.category}</p>
              <p>ID: ${product.id}</p>
              <div class="card-buttons">
                <button onclick="addToCart(${product.id})">Add</button>
                <button class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button>
              </div>
            </div>`;
  }).join(" ");
}

// Add to cart function
window.addToCart = (productId) => {
  const productToAdd = products.find((product) => product.id === productId);
  const existingItem = cartItems.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({ ...productToAdd, quantity: 1 });
  }

  updateCart();
}

// Remove from cart function
window.removeFromCart = (productId) => {
  const existingItemIndex = cartItems.findIndex((item) => item.id === productId);

  if (existingItemIndex !== -1) {
    if (cartItems[existingItemIndex].quantity > 1) {
      cartItems[existingItemIndex].quantity -= 1;
    } else {
      cartItems.splice(existingItemIndex, 1);
    }
    updateCart();
  }
}

// Update cart display
function updateCart() {
  if (cartItems.length === 0) {
    cartContainer.innerHTML = "<h2>Your Cart</h2><p>Your cart is empty</p>";
    return;
  }

  let cartHTML = `<h2>Your Cart</h2>`;
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.quantity;
    cartHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <p>$${item.price} x ${item.quantity}</p>
          <p>Category: ${item.category}</p>
        </div>
      </div>
    `;
  });

  cartHTML += `<div class="cart-total">Total: $${total.toFixed(2)}</div>`;
  cartContainer.innerHTML = cartHTML;
}

// Search functionality
window.handleSearch = () => {
  const query = searchInput.value;
  if (query.trim() === "") {
    displayProducts();
    return;
  }
  const results = searchProducts(query);
  displayProducts(results);
};

window.clearSearch = () => {
  searchInput.value = "";
  displayProducts();
};

// Add product form toggle
let addProductForm = document.querySelector('.add-product');
addProductForm.style.display = 'none';

window.toggleAddProductForm = () => {
  addProductForm.style.display = addProductForm.style.display === 'none' ? 'block' : 'none';
};

// Add new product function
window.addNewProduct = () => {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const price = parseFloat(document.getElementById("price").value);
  const image = document.getElementById("image").value;
  const category = document.getElementById("category").value;

  if (id && name && !isNaN(price) && image && category) {
    const newProduct = {
      id: parseInt(id),
      name,
      price,
      image,
      category
    };

    products.push(newProduct);
    displayProducts();

    // Clear input fields
    document.getElementById("id").value = '';
    document.getElementById("name").value = '';
    document.getElementById("price").value = '';
    document.getElementById("image").value = '';
    document.getElementById("category").value = '';
    
    addProductForm.style.display = 'none';
  } else {
    alert("Please fill all fields correctly");
  }
}

// Initialize
displayProducts();
updateCart();