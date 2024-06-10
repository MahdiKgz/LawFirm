import { register } from "./funcs/auth.js";

window.addEventListener("load", () => {
  const registerButton = document.querySelector("#register-btn");
  registerButton.addEventListener("click", () => {
    register();
  });
  particlesJS.load("register-section", "assets/other/particles-config.json", function () {
    console.log("callback - particles.js config loaded");
  });
});
