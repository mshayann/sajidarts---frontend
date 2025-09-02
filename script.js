const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
  // Get current path (e.g. "/about.html")
  const currentPath = window.location.pathname;

  // Loop through all navbar links
  document.querySelectorAll("#navbar li a").forEach(link => {
    // Compare the link href with the current path
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});





//animation for scrolling
  document.addEventListener("DOMContentLoaded", () => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Remove if you want animation only once
        }
      });
    }, { threshold: 0.2 }); // Trigger when 20% visible

    reveals.forEach(reveal => {
      observer.observe(reveal);
    });
  });


(function () {
  const link = document.querySelector("#navbar .dropdown > a");
  const item = document.querySelector("#navbar .dropdown");

  if (!link || !item) return;

  link.addEventListener("click", function (e) {
    // only for mobile & medium
    if (window.innerWidth <= 991) {
      e.preventDefault();
      item.classList.toggle("open"); // click again = close
    }
  });

  // optional: close when resizing up to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991) item.classList.remove("open");
  });
})();



function renderProducts(containerId, productList) {
  const container = document.getElementById(containerId);
  if (!container) return; // prevent crash if id not found

  container.innerHTML = ""; // clear before inserting

  productList.forEach(product => {
    container.innerHTML += `
      <a href="product-details.html?id=${product.id}" style = "text-decoration:none;">
    <div class="pro">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <div class="des">
          <span>${product.category}</span>
          <h5>${product.name}</h5>
          <h4>
              <span style="color:#673de6;font-weight:bold;font-size:20px;margin-right:8px;">
                Rs. ${product.price}
              </span>
              ${product.oldPrice 
                ? `<span style="color:#777;text-decoration:line-through;font-size:14px;">
                    Rs. ${product.oldPrice}
                   </span>` 
                : ""}
            </h4>
        </div>
      <a href="#" class="add-to-cart" data-id="${product.id}">
  <span class="cart"><i class="fa-solid fa-cart-shopping"></i></span>
</a>
      </div>
      </a>
    `;
  });
  document.querySelectorAll(`#${containerId} .add-to-cart`).forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent page reload
    const id = parseInt(btn.dataset.id);
    addToCart(id);
  });
});
}

// Example usage:
renderProducts("new-arrivals", products.slice(0, 8)); // show first 8
renderProducts("featured", products.slice(8, 16)); // show next 4

// Wooden Wall Decor Scenery category
renderProducts(
  "wooden-wall-decor",
  products.filter(p => p.category === "Wooden Wall Decor Scenery")
);


// cart utility functions

// ---- CART LOGIC ---- //
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const cart = getCart();
  const product = products.find(p => p.id === productId);

  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1; // increase quantity
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      // ✅ store absolute URL instead of relative
      image: new URL(product.image, window.location.origin).href,
      quantity: 1
    });
  }

  saveCart(cart);
  
  
  alert(`${product.name} added to cart!`);
}


// testimonials slider

      document.addEventListener("DOMContentLoaded", function () {
        const slider = document.querySelector("#banner3 .slider");
        const slides = document.querySelectorAll("#banner3 .banner-box");
        const prevBtn = document.querySelector("#banner3 .prev");
        const nextBtn = document.querySelector("#banner3 .next");
 if (!slider || slides.length === 0 || !prevBtn || !nextBtn) return; // <-- stop if missing
        let currentIndex = 0;

        function getVisibleCards() {
          if (window.innerWidth <= 477) return 1; // phones
          if (window.innerWidth <= 799) return 2; // tablets
          if (window.innerWidth <= 1200) return 3; // medium screens
          return 4; // desktops
        }

        function showSlide(index) {
          const visibleCards = getVisibleCards();
          const totalSlides = slides.length - visibleCards + 1;

          if (index < 0) index = totalSlides - 1;
          if (index >= totalSlides) index = 0;
          currentIndex = index;

          const movePercent = (100 / visibleCards) * index;
          slider.style.transform = `translateX(-${movePercent}%)`;
        }

        prevBtn.addEventListener("click", () => {
          showSlide(currentIndex - 1);
        });

        nextBtn.addEventListener("click", () => {
          showSlide(currentIndex + 1);
        });

        window.addEventListener("resize", () => {
          showSlide(currentIndex); // re-calc when screen resizes
        });

        showSlide(currentIndex);
      });
  

