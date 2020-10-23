// SHOW HIDDEN NAVBAR MENU
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

navClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
