import { sendClientMessage, showTestimonials } from "./funcs/shared.js"


window.addEventListener('load' , () => {
    showTestimonials();
   
    const sendMessageBtn = document.querySelector('#send')
    sendMessageBtn.addEventListener('click' , (event) => {
      event.preventDefault();
      iziToast.show({
          title:"پیام شما ثبت شد",
          message : "منتظر تماس ما باشید",
          color : "green",
          rtl : true ,
          position : "topLeft"
        })
      setTimeout(() => {
          sendClientMessage();
      }, 5000);
    })
})