let links = document.querySelectorAll(".menu-item > a");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function (event) {
    event.preventDefault();
    document
      .querySelector(links[i].getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };
}
