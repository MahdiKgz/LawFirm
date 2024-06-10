import { login } from "./funcs/auth.js";

window.addEventListener("load", () => {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", () => {
    login();
  });
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load("login-section", "assets/other/particles-config.json", function () {
    console.log("callback - particles.js config loaded");
  });
});
