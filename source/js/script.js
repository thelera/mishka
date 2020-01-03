
// меню в шапке сайта
var menu = document.querySelector(".menu");
var menuToggle = document.querySelector(".menu__toggle");

menu.classList.remove("menu--no-js");

//if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    if (menu.classList.contains("menu--opened")) {
      menu.classList.remove("menu--opened");
    } else {
      menu.classList.add("menu--opened");
    }
  });
//}
