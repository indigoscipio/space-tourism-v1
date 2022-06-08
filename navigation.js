let menuContent = document.querySelector("#menu-content");
let btnMenu = document.querySelector("#menu");

function toggleMenu() {
  menuContent.classList.toggle("active");
}

btnMenu.addEventListener("click", toggleMenu);
