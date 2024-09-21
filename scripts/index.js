let links = document.querySelectorAll(".menu-item > a");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function (event) {
    event.preventDefault();
    document
      .querySelector(links[i].getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };
}

const products = [
  {
    id: 1,
    name: "Cosmetic products",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: "./assets/image/1.png",
    price: 150,
  },
  {
    id: 2,
    name: "Cosmetic products",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    image: "./assets/image/2.png",
    price: 120,
  },
];

const productBox = document.querySelector(".product-box");

const productMap = products.map((el) => {
  return `
    <div class="product__card">
        <img
          class="product__image"
          src="${el.image}"
          loading="lazy"
          alt="card image"
        />
        <div class="product__card-content">
          <h2>${el.name}</h2>
          <p>${el.description}</p>
          <div class="product__card-actions">
            <div class="product__card-buttons">
              <button id="now" class="btn">Buy Now</button>
              <button id="cart" class="btn btn-border">Add To Cart</button>
          </div>
          <span>${el.price}$</span>
        </div>
      </div>
    </div>
  `;
});

productBox.innerHTML = productMap.join("");
