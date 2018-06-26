var cart1 = document.querySelector(".product__item--inner:nth-child(1) .button--product-buy");

var cart2 = document.querySelector(".product__item:nth-child(2) .button--product-buy");
var cart3 = document.querySelector(".product__item:nth-child(3) .button--product-buy");
var cart4 = document.querySelector(".product__item:nth-child(4) .button--product-buy");
var cart5 = document.querySelector(".product__item:nth-child(5) .button--product-buy");
var cart6 = document.querySelector(".product__item:nth-child(6) .button--product-buy");
var cart7 = document.querySelector(".product__item:nth-child(7) .button--product-buy");
var cart8 = document.querySelector(".product__item:nth-child(8) .button--product-buy");
var cart9 = document.querySelector(".product__item:nth-child(9) .button--product-buy");
var popupcart = document.querySelector(".modal--cart");
var closecart = document.querySelector(".modal__button-close--form");

cart1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

cart2.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

cart3.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

cart4.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

cart5.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

cart6.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

cart7.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

cart8.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

cart9.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");
});

closecart.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupcart.classList.contains("modal--show")) {
      popupcart.classList.remove("modal--show");
    }
  }
});
