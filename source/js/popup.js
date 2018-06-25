var letter = document.querySelector(".button--letter");
var popupletter = document.querySelector(".modal--letter");
var closeletter = document.querySelector(".modal__button-close--form");
var link = document.querySelector(".contacts__link");
var popupmap = document.querySelector(".modal--map");
var closemap = document.querySelector(".modal__button-close--map");
var form = popupletter.querySelector("form");
var login = popupletter.querySelector("[name=login]");
var email = popupletter.querySelector("[name=email]");
var text = popupletter.querySelector("[name=text]");
var storage = localStorage.getItem("login");
var isStorageSupport = true;
var storage = "";
var cart10 = document.querySelector(".product__item--index:nth-child(1) .button--product-buy");
var popupcart = document.querySelector(".modal--cart");
var closecart = document.querySelector(".modal__button-close--form");


/*
var cart1 = document.querySelector(".product__item:nth-child(1) .button--product-buy");
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
*/

letter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupletter.classList.add("modal--show");
  login.focus();
  if (storage) {
    login.value = storage;
    text.focus();
  } else {
    login.focus();
  }
});

closeletter.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupletter.classList.remove("modal--show");
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.add("modal--show");
});

closemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupmap.classList.remove("modal--show");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log("Отправляем форму");
  console.log(login.value);
  console.log(email.value);
  console.log(text.value);
  if (!login.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя, email");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }

  try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupmap.classList.contains("modal--show")) {
      popupmap.classList.remove("modal--show");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupletter.classList.contains("modal--show")) {
      popupletter.classList.remove("modal--show");
    }
  }
});

/*
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
});*/

cart10.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupcart.classList.add("modal--show");


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
