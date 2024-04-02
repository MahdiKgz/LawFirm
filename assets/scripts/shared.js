const submenuButtonElem = document.querySelector("#header-submenu-btn");
const subMenuElem = document.querySelector("#header-submenu");

submenuButtonElem.addEventListener("mouseenter", () => {
  subMenuElem.classList.replace("hidden", "flex");
});
subMenuElem.addEventListener("mouseleave", () => {
  subMenuElem.classList.replace("flex", "hidden");
});

let mobileMenuElem = document.querySelector("#mobile_menu");
let mobileMenuTogglerBtn = document.querySelector("#mobile-menu-toggler");
let mobileMenuCloserBtn = document.querySelector(".mobile-menu__header-left");
let overlay = document.querySelector(".overlay");

mobileMenuTogglerBtn.addEventListener('click', () => {
  mobileMenuElem.style.display = 'block';
  overlay.style.display = 'flex'
});


overlay.addEventListener('click' , (event) => {
  mobileMenuElem.style.display = 'none'
  overlay.style.display = 'none'
})

mobileMenuCloserBtn.addEventListener('click', () => {
  mobileMenuElem.style.display = 'none'
  overlay.style.display = 'none'

});
