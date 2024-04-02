import { displayPracticeArea, sendClientMessage } from "./funcs/shared.js";

window.addEventListener("load", () => {
  displayPracticeArea();

  const sendMessageBtn = document.querySelector("#send");
  sendMessageBtn.addEventListener("click", (event) => {
    event.preventDefault();
    sendClientMessage().then(() => {
      iziToast.show({
        title: "پیام شما ثبت شد",
        message: "منتظر تماس ما باشید",
        color: "green",
        rtl: true,
        position: "topLeft",
      });
    });
  });
});
