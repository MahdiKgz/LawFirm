import {
  getMe,
  getToken,
  showSwal,
} from "../../../assets/scripts/funcs/utils.js";

window.addEventListener("load", () => {
  const loadOverlay = document.querySelector(".load-overlay");
  loadOverlay.style.display = "none";
  const userToken = getToken();
  const userData = getMe();

  if (!userData || !userToken) {
    window.location.href = "../../login.html";
  }
  if (userData.role !== "USER"){
    localStorage.removeItem("userData");
    localStorage.removeItem("accessToken");
    window.location.href = "../../login.html";
  }
});

const userNameSpan = document.querySelector(".user-name-span");

userNameSpan.innerHTML = getMe().name;

const logOutButtons = document.querySelectorAll(".logout");

logOutButtons.forEach((logOutButton) => {
  logOutButton.addEventListener("click", () => {
    Swal.fire({
      title: "آیا میخواهید از حساب خود خارج شوید؟",
      text: "درصورتی که قصد خروج از حساب را دارید از دکمه های زیر استفاده کنید",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "خروج از حساب",
      cancelButtonText: "منصرف شدم",
    }).then((result) => {
      if (!result.isConfirmed) {
        return;
      }
      if(result.isConfirmed){
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userData");
        location.href = "../../index.html";
      }
    });
  });
});

const sidebarLinks = document.querySelectorAll(".sidebar__links-list-item");

sidebarLinks.forEach((sidebarLink) => {
  sidebarLink.addEventListener("click", (event) => {
    if (event.target.tagName == "a") return;
    else {
      sidebarLinks.forEach((otherLinks) =>
        otherLinks.classList.remove("active")
      );
      sidebarLink.classList.add("active");
    }
  });
});

const headerNotification = document.querySelector(".header-notification");
const notificationWrapper = document.querySelector(
  "#header-notification__wrapper"
);

headerNotification.addEventListener("mouseenter", () => {
  notificationWrapper.style.display = "flex";
});

notificationWrapper.addEventListener("mouseleave", (event) => {
  event.target.style.display = "none";
});

const mainHeaderLeft = document.querySelector(".main-header__left");
const optionBox = document.querySelector(".optionBox");

mainHeaderLeft.addEventListener("click", (event) => {
  if (optionBox.classList.value.includes("hidden")) {
    optionBox.classList.replace("hidden", "flex");
  } else {
    optionBox.classList.replace("flex", "hidden");
  }
});

const mobileMenuToggler = document.querySelector("#mobileMenutoggler");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobileMenu");
const closeBtn = document.querySelector(".closeBtn");

mobileMenuToggler.addEventListener("click", () => {
  overlay.classList.replace("hidden", "block");
  mobileMenu.classList.replace("hidden", "flex");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.replace("block", "hidden");
  mobileMenu.classList.replace("flex", "hidden");
});

overlay.addEventListener("click", () => {
  overlay.classList.replace("block", "hidden");
  mobileMenu.classList.replace("flex", "hidden");
});
