import { sendClientMessage, showFAQCards } from "./funcs/shared.js";

window.addEventListener("load", () => {
  showFAQCards();

  const sendButton = document.querySelector("#send");
  sendButton.addEventListener("click", (event) => {
    event.preventDefault();
    iziToast.show({
      title: "پیام شما ثبت شد",
      message: "منتظر تماس ما باشید",
      color: "green",
      rtl: true,
      position: "topLeft",
    });
    setTimeout(() => {
      sendClientMessage();
    }, 5000);
  });
});
