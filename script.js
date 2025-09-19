const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Get current path (e.g. "/about.html")
  const currentPath = window.location.pathname;

  // Loop through all navbar links
  document.querySelectorAll("#navbar li a").forEach((link) => {
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

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Remove if you want animation only once
        }
      });
    },
    { threshold: 0.1 }
  ); // Trigger when 20% visible

  reveals.forEach((reveal) => {
    observer.observe(reveal);
  });

  //home decor
  const selected = products.filter((p) =>
    [
      "Acrylic Wall Clocks",
      "Chrome Acrylic Decor",
      "Gold Acrylic Decor",
      "Wooden Wall Decor Scenery",
      "Arabic Calligraphy",
      "Customized Neon Signs",
    ].includes(p.category)
  );

  // shuffle
  const shuffled = selected.sort(() => Math.random() - 0.5);

  let perPage = 10; // how many products per load
  let currentIndex = 0;
  let loading = false;

  // render a chunk
  function renderPage() {
    if (loading) return;
    loading = true;

    const slice = shuffled.slice(currentIndex, currentIndex + perPage);
    renderProducts("home-decor", slice, true);
    currentIndex += perPage;
    //  hide button if no more products left
    if (currentIndex >= shuffled.length) {
      document.getElementById("loadMore").style.display = "none";
    }
    // and at initial load:
    if (shuffled.length <= perPage) {
      document.getElementById("loadMore").style.display = "none";
    }

    loading = false;
  }

  // initial load
  renderPage();

  // See More
  seeMoreBtn = document.getElementById("loadMore");
  if (seeMoreBtn) {
    seeMoreBtn.addEventListener("click", () => {
      // when user reaches near bottom

      renderPage();
    });
  }

  // Example usage:
  renderProducts("new-arrivals", products.slice(0, 10)); // show first 8
  renderProducts("featured", products.slice(10, 20)); // show next 4

  // Wooden Wall Decor Scenery category
  renderProducts(
    "wooden-wall-decor",
    products.filter((p) => p.category === "Wooden Wall Decor Scenery")
  );

  // Workplace Decor category
  renderProducts(
    "workplace-decor",
    products.filter((p) => p.category === "Workplace Decor")
  );

  // Arabic Calligraphy category
  renderProducts(
    "arabic-calligraphy",
    products.filter((p) => p.category === "Arabic Calligraphy")
  );

  // gold acrylic decor
  renderProducts(
    "gold-acrylic-decor",
    products.filter((p) => p.category === "Gold Acrylic Decor")
  );

  // chrome acrylic decor
  renderProducts(
    "chrome-acrylic-decor",
    products.filter((p) => p.category === "Chrome Acrylic Decor")
  );
  // customized neon signs
  renderProducts(
    "customized-neon-signs",
    products.filter((p) => p.category === "Customized Neon Signs")
  );
  // Acrylic Wall Clocks
  renderProducts(
    "acrylic-wall-clocks",
    products.filter((p) => p.category === "Acrylic Wall Clocks")
  );
  // Offset Printing Works
  renderProducts(
    "offset-printing-works",
    products.filter((p) => p.category === "Offset Printing Works"),
    true
  );

  //steel letter signs
  renderProducts(
    "steel-letter-signs",
    products.filter((p) => p.category === "Steel Letter Signs")
  );

  //acrylic wall decor
  renderProducts(
    "acrylic-wall-decor",
    products.filter((p) =>
      [
        "Acrylic Wall Clocks",
        "Chrome Acrylic Decor",
        "Gold Acrylic Decor",
      ].includes(p.category)
    )
  );
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

function renderProducts(containerId, productList, append = false) {
  const container = document.getElementById(containerId);
  if (!container) return; // prevent crash if id not found

  if (!append) container.innerHTML = "";

  productList.forEach((product) => {
    const item = document.createElement("div");
    item.innerHTML = `
  <div class="pro">
    <a href="product-details.html?id=${
      product.id
    }" style="text-decoration:none;">
      <img src="${product.image}" alt="${product.name}" loading="lazy"/>
      <div class="des">
        <span>${product.category}</span>
        <h5>${product.name}</h5>
        <h4>
  <span style="color:#253675;font-weight:bold;font-size:19px;margin-right:8px;">
    Rs. ${
      product.mediumDiscounted ? product.mediumDiscounted : product.mediumPrice
    }
  </span>
  ${
    product.mediumDiscounted
      ? `<span style="color:#777;text-decoration:line-through;font-size:13px;">
          Rs. ${product.mediumPrice}
         </span>`
      : ""
  }
</h4>
      </div>
    </a>
    <a href="#" class="add-to-cart" data-id="${product.id}">
      <span class="cart"><i class="fa-solid fa-cart-shopping"></i></span>
    </a>
  </div>
`;
    container.appendChild(item.firstElementChild);
  });

  // Attach "Add to Cart" events
  container.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      const size = btn.dataset.size; // ✅ capture size
      addToCart(id, size);
    });
  });
}

// cart utility functions

// ---- CART LOGIC ---- //
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function addToCart(productId, size = "medium") {
  const cart = getCart();
  const product = products.find((p) => p.id === productId);

  if (!product) return;

  // pick price and dimension based on size
  let price, dimension;
  if (size === "large") {
    price = product.largePrice;
    dimension = product.largeDimension;
  } else {
    price = product.mediumPrice;
    dimension = product.mediumDimension;
  }

  // check if the same product with same size already exists
  const existing = cart.find((item) => item.id === productId && item.size === size);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      size: size,
      price: price,
      dimension: dimension,
      image: new URL(product.image, window.location.origin).href,
      quantity: 1,
    });
  }

  saveCart(cart);

  alert(`${product.name} (${size}) added to cart!`);
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

                var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?69156';
                var s = document.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = url;
                var options = {
                "enabled":true,
                "chatButtonSetting":{
                    "backgroundColor":"#00e785",
                    "ctaText":"",
                    "borderRadius":"25",
                    "marginLeft": "0",
                    "marginRight": "20",
                    "marginBottom": "20",
                    "ctaIconWATI":false,
                    "position":"left"
                },
                "brandSetting":{
                    "brandName":"Sajid Arts",
                    "brandSubTitle":"undefined",
                    "brandImg":"",
                    "welcomeText":"Hi there!\nHow can I help you?",
                    "messageText":"",
                    "backgroundColor":"#00e785",
                    "ctaText":"Chat with us",
                    "borderRadius":"25",
                    "autoShow":false,
                    "phoneNumber":"923177693301"
                }
                };
                s.onload = function() {
                    CreateWhatsappChatWidget(options);
                };
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            
