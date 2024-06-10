import { getMe, getToken } from "./funcs/utils.js";

const submenuButtonElem = document.querySelector("#header-submenu-btn");
const subMenuElem = document.querySelector("#header-submenu");

const loadOverlay = document.querySelector(".load-overlay");

window.addEventListener("load", () => {
  loadOverlay.style.display = "none";
});

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

mobileMenuTogglerBtn.addEventListener("click", () => {
  mobileMenuElem.style.display = "block";
  overlay.style.display = "flex";
});

overlay.addEventListener("click", (event) => {
  mobileMenuElem.style.display = "none";
  overlay.style.display = "none";
});

mobileMenuCloserBtn.addEventListener("click", () => {
  mobileMenuElem.style.display = "none";
  overlay.style.display = "none";
});

const accessToken = getToken();
const userData = getMe();

const loginRegisterButton = document.querySelector(
  ".top-bar__left-consult-btn"
);
const mobileLoginButton = document.querySelector("#loginButtonMobile");

if (accessToken && userData) {
  loginRegisterButton.insertAdjacentHTML(
    "beforeend",
    `
<a
    id="register-btn"
    aria-label="consult-btn"
    href="./pannel/${userData.role.toLowerCase()}pannel/dashboard.html"
    class="flex items-center md:gap-x-1 hover:bg-white/10 sm:text-sm md:text-base sm:px-6 sm:py-2 md:px-11 md:py-4 transition-all duration-300 delay-100 rounded-xl"
  >
    <svg class="w-6 h-6">
      <use href="#user"></use>
    </svg>
    ${userData.name}
  </a>
`
  );
  mobileLoginButton.insertAdjacentHTML(
    "beforeend",
    `
<a href="pannel/${userData.role.toLowerCase()}pannel/dashboard.html" aria-label="login page link">
<svg class="w-6 h-6">
  <use href="#user"></use>
</svg>
</a>
`
  );
} else {
  loginRegisterButton.insertAdjacentHTML(
    "beforeend",
    `
<a
    id="register-btn"
    aria-label="consult-btn"
    href="login.html"
    class="flex items-center md:gap-x-1 hover:bg-white/10 sm:text-sm md:text-base sm:px-6 sm:py-2 md:px-11 md:py-4 transition-all duration-300 delay-100 rounded-xl"
  >
    <svg class="w-6 h-6">
      <use href="#user"></use>
    </svg>
    ورود / ثبت نام
  </a>
`
  );
  mobileLoginButton.insertAdjacentHTML(
    "beforeend",
    `
    <a href="login.html" aria-label="login page link">
    <svg class="w-6 h-6">
      <use href="#user"></use>
    </svg>
    </a>
`
  );
}
