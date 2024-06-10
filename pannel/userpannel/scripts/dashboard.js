import { displayAccordion, fetchUserMessages, sendUserMessage, showMessageDetail , showAnsweredMessageDetail } from "./funcs/shared.js";

window.showMessageDetail = showMessageDetail
window.showAnsweredMessageDetail = showAnsweredMessageDetail
window.addEventListener("load", () => {
  displayAccordion();
  fetchUserMessages();
});

const sendMessageButton = document.querySelector("#sendMsgButton")
sendMessageButton.addEventListener('click' , () => {
  sendUserMessage();
  setTimeout(() => {
    fetchUserMessages();
  }, 3000);
})