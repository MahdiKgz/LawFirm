import {
  displayPracticeArea,
  showClientComments,
  displayLawyerTeam,
  showCaseSuccessPercent,
  sendClientMessage,
  showRecentBlog,
} from "./funcs/shared.js";

window.addEventListener("load", () => {
  displayPracticeArea();
  showCaseSuccessPercent();
  showClientComments();
  displayLawyerTeam();

  const sendMessageBtn = document.querySelector("#send");
  sendMessageBtn.addEventListener("click", (event) => {
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

  showRecentBlog();
});

