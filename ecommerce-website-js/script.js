const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const totalPrice = document.getElementById("total");
const clearCartBtn = document.getElementById("clear-cart");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let allProducts = []; // will store all fetched products
let visibleCount = 0;
const batchSize = 6; // how many products to show per scroll

// Debounce function
function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Network error");
    allProducts = await response.json();
    loadMoreProducts(); // initially show first batch
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Load next batch of products
function loadMoreProducts() {
  const nextBatch = allProducts.slice(visibleCount, visibleCount + batchSize);
  renderProducts(nextBatch);
  visibleCount += batchSize;
}

// Render given products
function renderProducts(products) {
  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add(
      "shadow-lg",
      "rounded",
      "overflow-hidden",
      "p-4",
      "bg-cyan-50",
      "m-2"
    );
    card.innerHTML = `
      <img src="${product.image}" alt="${
      product.title
    }" class="w-full h-48 object-contain mb-4" />
      <h2 class="text-lg font-bold">${product.title}</h2>
      <p class="text-gray-700 text-sm">${product.description.substring(
        0,
        80
      )}...</p>
      <p class="text-green-900 font-bold my-2">$${product.price}</p>
      <button class="add-to-cart bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">Add to Cart</button>
    `;
    card
      .querySelector(".add-to-cart")
      .addEventListener("click", () =>
        addToCart(product.id, product.title, product.price)
      );
    productContainer.appendChild(card);
  });
}

// Add to Cart
function addToCart(id, title, price) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, title, price, qty: 1 });
  }
  updateCart();
}

// Update Cart
function updateCart() {
  renderCart();
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Render Cart
function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const div = document.createElement("div");
    div.className = "p-4 bg-white shadow rounded";
    div.innerHTML = `
      <h4 class="font-semibold">${item.title}</h4>
      <p>$${item.price} x ${item.qty}</p>
      <div class="flex gap-2 mt-2">
        <button class="decrease bg-yellow-500 text-white px-2 rounded">-</button>
        <button class="increase bg-green-500 text-white px-2 rounded">+</button>
        <button class="remove bg-red-500 text-white px-2 rounded">Remove</button>
      </div>
    `;

    div.querySelector(".increase").addEventListener("click", () => {
      item.qty++;
      updateCart();
    });

    div.querySelector(".decrease").addEventListener("click", () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart = cart.filter((i) => i.id !== item.id);
      }
      updateCart();
    });

    div.querySelector(".remove").addEventListener("click", () => {
      cart = cart.filter((i) => i.id !== item.id);
      updateCart();
    });

    cartContainer.appendChild(div);
    total += item.price * item.qty;
  });

  totalPrice.textContent = total.toFixed(2);
}

// Clear Cart
clearCartBtn.addEventListener("click", () => {
  cart = [];
  updateCart();
});

// Debounced scroll listener for infinite scroll
window.addEventListener(
  "scroll",
  debounce(() => {
    console.log(
      "Scroll event triggered",
      window.innerHeight,
      window.scrollY,
      document.body.offsetHeight
    );
    const nearBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (nearBottom && visibleCount < allProducts.length) {
      loadMoreProducts();
    }
  }, 300)
); // 300ms debounce delay

// Initial load
fetchProducts();
renderCart();

// const allProducts = Array.from({ length: 100 }, (_, i) => `Product ${i + 1}`);

// let itemsPerPage = 10;
// let currentPage = 1;
// function renderProduct(){
//     const start =(currentPage-1) * itemsPerPage;
//     const end = start+ itemsPerPage;
//     const visibleItems = allProducts.slice(start,end);
//     const container = document.getElementById('product-list');
//     container.innerHTML = visibleItems.map((item)=>{
//         return `<div class="product-item">${item}</div>`;
//     }).join('')
// }
// function renderPagination() {
//   const totalPages = Math.ceil(allProducts.length / itemsPerPage);
//   const pagination = document.getElementById("pagination");
//   pagination.innerHTML = "";

//   for (let i = 1; i <= totalPages; i++) {
//     const btn = document.createElement("button");
//     btn.innerText = i;
//     btn.className = `px-3 py-1 m-1 rounded ${i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`;
//     btn.addEventListener("click", () => {
//       currentPage = i;
//       renderProduct();
//       renderPagination();
//     });
//     pagination.appendChild(btn);
//   }
// }
// renderProduct();
// renderPagination();
