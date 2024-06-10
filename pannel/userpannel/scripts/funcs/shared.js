import { getMe } from "../../../../assets/scripts/funcs/utils.js";

const displayAccordion = () => {
  const accordions = document.querySelectorAll(".accordion");
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  if (accordions) {
    accordionHeaders.forEach((accordionHeader, index) => {
      accordionHeader.addEventListener("click", (event) => {
        accordions[index].classList.toggle("show");
      });
    });
  } else {
    return;
  }
};

const fetchUserMessages = async () => {
  const notAnsweredQuestionWrapper = document.querySelector(
    "#not-answered-question"
  );
  const answeredQuestionWrapper = document.querySelector("#answered-question");
  const generalInformationWrapper = document.querySelector(".general__information-wrapper")
  try {
    const messages = await fetch("https://yadegar-lawfirm.liara.run/messages");
    const json = await messages.json();
    const filteredMessges = json.filter(
      (message) => message.createdBy === getMe().name
    );

    
      

    if (filteredMessges.length) {
      const answeredQuestions = filteredMessges.filter(
        (message) => message.isAnswered === true
      );
      
      const notAnsweredQuestions = filteredMessges.filter(
        (message) => message.isAnswered === false
      );

      generalInformationWrapper.innerHTML = ''
      generalInformationWrapper.insertAdjacentHTML("beforeend" , 
        `
        <div class="general__info w-auto xl:w-72 bg-primary-2 flex flex-grow md:flex-grow-0 items-center gap-x-2.5 md:gap-x-4.5 px-5 py-3.5 sm:px-4 sm:py-2.5 md:p-3.5  rounded-xl">
        <div class="general__info-icon bg-primary-3 h-full p-2.5 md:p-4.5 rounded-xl">
          <svg class="w-6 lg:w-7 h-6 lg:h-7">
            <use href="#messages"></use>
          </svg>
        </div>
        <div class="general_info-text flex flex-col gap-y-2 md:gap-y-3.5">
          <span class="font-DanaDemi text-base">کل پیام ها</span>
          <span class="font-Dana text-sm">${filteredMessges.length} پیام</span>
        </div>
      </div>
        `
      )
      generalInformationWrapper.insertAdjacentHTML("beforeend" , 
        `
        <div class="general__info lg:w-auto xl:w-72 bg-emerald-500 flex flex-grow md:flex-grow-0 items-center gap-x-2.5 md:gap-x-4.5 px-5 py-3.5 sm:px-4 sm:py-2.5 md:p-3.5  rounded-xl">
        <div class="general__info-icon bg-emerald-300 h-full p-2.5 md:p-4.5 rounded-xl">
          <svg class="w-6 lg:w-7 h-6 lg:h-7">
            <use href="#check-badge"></use>
          </svg>
        </div>
        <div class="general_info-text flex flex-col gap-y-2 md:gap-y-3.5">
          <span class="font-DanaDemi text-base">پیام های پاسخ داده شده</span>
          <span class="font-Dana text-sm">${answeredQuestions.length} پیام</span>
        </div>
      </div>
        `
      )

      answeredQuestionWrapper.innerHTML = "";
      answeredQuestions.forEach((answeredQuestion, index) => {
        answeredQuestionWrapper.insertAdjacentHTML(
          "beforeend",
          `
          <div class="message flex justify-between items-center transition-all duration-300 delay-100">
            <span class="px-2 ">${index + 1}</span>
            <h1 class="px-2 max-w-25 line-clamp-1">${
              answeredQuestion.subject
            }</h1>
            <span class="px-2 line-clamp-1 max-w-40 md:max-w-[250px]">${
              answeredQuestion.body
            }</span>
            <span class="hidden md:inline-block bg-emerald-300/90 px-2 py-0.5 text-emerald-700 rounded-xl">پاسخ داده شده</span>
            <button class="px-3 py-1.5 md:px-6 md:py-2.5 bg-primary-1 hover:text-white text-secondary-1 rounded-xl transition-all duration-300 delay-100" onclick="showAnsweredMessageDetail('${
              answeredQuestion.subject
            }','${answeredQuestion.answerDetail.createdBy}','${
            answeredQuestion.answerDetail.answerBody
          }')">مشاهده </button>
          </div>
              `
        );
      });

      notAnsweredQuestionWrapper.innerHTML = "";
      notAnsweredQuestions.forEach((notAnsweredQuestion, index) => {
        notAnsweredQuestionWrapper.insertAdjacentHTML(
          "beforeend",
          `
          <div class="message flex justify-between items-center transition-all duration-300 delay-100">
                <span class="px-2">${index + 1}</span>
                <h1 class="px-2 line-clamp-1 max-w-25">${
                  notAnsweredQuestion.subject
                }</h1>
                <span class="px-2 line-clamp-1 max-w-40 md:max-w-[250px]">${
                  notAnsweredQuestion.body
                }</span>
                <span class="hidden md:inline-block px-2 py-0.5 text-red-700 bg-red-300/90 rounded-xl">پاسخ داده نشده</span>
                <button class="px-3 py-1.5 md:px-6 md:py-2.5 bg-primary-1 hover:text-white text-secondary-1 rounded-xl transition-all duration-300 delay-100"  onclick="showMessageDetail('${
                  notAnsweredQuestion.subject
                }','${notAnsweredQuestion.body}')">مشاهده </button>
          </div>
          `
        );
      });
    } else {
      notAnsweredQuestionWrapper.innerHTML =
        "<p class='text-red-600'>پیامی ندارید</p>";
      answeredQuestionWrapper.innerHTML =
        "<p class='text-red-600'>پیامی ندارید</p>";
    }
  } catch (error) {
    iziToast.show({
      title: "در دریافت پیام ها مشکلی پیش اومد",
      message: "صفحه را refresh یا با پیشتیبانی تماس بگیرید",
      color: "red",
      position: "topLeft",
      rtl: true,
    });
  }
};

const sendUserMessage = async () => {
  const messageSubjectElem = document.querySelector("#msg-subject");
  const messageBodyElem = document.querySelector("#msg-body");

  if (!messageBodyElem.value || !messageSubjectElem.value) {
    iziToast.show({
      title: "مشکلی پیش اومده",
      message: "لطفا تمامی فیلد ها رو پر کنید",
      color: "red",
      rtl: true,
      position: "topLeft",
    });
  } else {
    try {
      const answerDetail = {
        answerBody: "",
        createdBy: "",
      };
      const userMessageDetail = {
        subject: messageSubjectElem.value.trim(),
        body: messageBodyElem.value.trim(),
        createdBy: getMe().name,
        isAnswered: false,
        answerDetail,
      };
      console.log(userMessageDetail);
      const res = await fetch("https://yadegar-lawfirm.liara.run/messages", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userMessageDetail),
      });
      iziToast.show({
        title: "پیام شما دریافت شد",
        message: "پاسخ شما در قسمت بالایی نمایش داده میشود",
        color: "green",
        rtl: true,
        position: "topLeft",
      });
      messageSubjectElem.value = "";
      messageBodyElem.value = "";
    } catch (error) {
      iziToast.show({
        title: "مشکلی پیش اومده",
        message: "لطفا دقایقی دیگه امتحان کنید",
        color: "red",
        rtl: true,
        position: "topLeft",
      });
      messageSubjectElem.value = "";
      messageBodyElem.value = "";
    }
  }
};

const showMessageDetail = (subject, body) => {
  Swal.fire({
    title: subject,
    text: body,
    icon: "question",
  });
};

const showAnsweredMessageDetail = (subject, answeredBy, answerBody ) => {
  Swal.fire({
    title: subject,
    text: `پاسخ ${answeredBy} : ${answerBody}`,
    icon: "success",
  });
};

const showUserMeetingDates = async () => {
  const meetingListWrapper = document.querySelector(".meeting-content");
  const generalInformationWrapper = document.querySelector('.general__information-wrapper')


  try {
    const res = await fetch("https://yadegar-lawfirm.liara.run/meetings");
    const meetings = await res.json();
    const clientMeetings = meetings.filter(
      (meeting) => meeting.requestedBy === getMe().name
    );
    const acceptedMeeting = clientMeetings.filter(meeting => meeting.isConfirmed === true)

    
    meetingListWrapper.innerHTML = "";
    if (clientMeetings.length) {
      clientMeetings.forEach((clientMeeting, index) => {
        meetingListWrapper.insertAdjacentHTML(
          "beforeend",
          `
        <div class="meeting-item flex items-center text-center justify-between gap-8 bg-transparent py-3.5 md:px-5 md:py-4 border-b-2 border-b-gray-400/40">
            <span class="font-DanaMedium text-center md:text-base">${
              index + 1
            }</span>
            <span class="font-DanaMedium text-center md:text-base">${
              clientMeeting.requestedBy
            }</span>
            <span class="font-DanaMedium hidden sm:block text-center md:text-base">${
              clientMeeting.consultName
            }</span>
            <span class="font-DanaMedium hidden md:block text-center md:text-base">${
              clientMeeting.date
            }</span>
            <span class="font-DanaMedium hidden md:block text-center md:text-base ${
              clientMeeting.isConfirmed ? "bg-emerald-300/90 px-2 py-0.5 text-emerald-700 rounded-xl" : "px-2 py-0.5 text-red-700 bg-red-300/90 rounded-xl"
            }">${
            clientMeeting.isConfirmed ? "تایید شده" : "در انتظار تایید"
          }</span>
            <button onclick='showMeetingStatus(${JSON.stringify(
              clientMeeting.isConfirmed
            )} , ${JSON.stringify(clientMeeting.consultName)},${JSON.stringify(
            clientMeeting.date
          )})' class="bg-primary-1 block md:hidden text-secondary-1 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 delay-100">مشاهده</button>
        </div>
        `
        );
      });

      generalInformationWrapper.innerHTML = ''

      generalInformationWrapper.insertAdjacentHTML("beforeend" , 
      `
      <div class="general__info lg:w-auto xl:w-72 bg-primary-2 flex flex-grow md:flex-grow-0 items-center gap-x-2.5 md:gap-x-4.5 px-5 py-3.5 sm:px-4 sm:py-2.5 md:p-3.5  rounded-xl">
      <div class="general__info-icon bg-primary-3 h-full p-2.5 md:p-4.5 rounded-xl">
        <svg class="w-6 lg:w-7 h-6 lg:h-7">
          <use href="#time"></use>
        </svg>
      </div>
      <div class="general_info-text flex flex-col gap-y-2 md:gap-y-3.5">
        <span class="font-DanaDemi text-base">همه وقت های مشاوره</span>
        <span class="font-Dana text-sm">${clientMeetings.length} ملاقات</span>
      </div>
    </div>
      `
    )
      generalInformationWrapper.insertAdjacentHTML("beforeend" , 
        `
        <div class="general__info lg:w-auto xl:w-72 bg-emerald-500 flex flex-grow md:flex-grow-0 items-center gap-x-2.5 md:gap-x-4.5 px-5 py-3.5 sm:px-4 sm:py-2.5 md:p-3.5  rounded-xl">
            <div class="general__info-icon bg-emerald-300 h-full p-2.5 md:p-4.5 rounded-xl">
              <svg class="w-6 lg:w-7 h-6 lg:h-7">
                <use href="#check-badge"></use>
              </svg>
            </div>
            <div class="general_info-text flex flex-col gap-y-2 md:gap-y-3.5">
              <span class="font-DanaDemi text-base">ملاقات های تایید شده</span>
              <span class="font-Dana text-sm">${acceptedMeeting.length} ملاقات</span>
            </div>
          </div>
        `
      )
    } else {
      meetingListWrapper.insertAdjacentHTML(
        "beforeend",
        `
      <div class="loader-container w-full h-full flex justify-center items-center">
        <span class="text-red-600">نوبت ملاقاتی ندارید</span>
      </div>
      `
      );
    }
  } catch (error) {
    iziToast.show({
      title: "مشکلی پیش آمد",
      message: "صفحه را refresh یا با پشتیبانی تماس بگیرید",
      rtl: true,
      color: "red",
      position: "topLeft",
    });
    meetingListWrapper.innerHTML = "";
    meetingListWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="loader-container w-full h-full flex justify-center items-center">
      <span class="text-red-600">نوبت ملاقاتی ندارید</span>
    </div>
    `
    );
  }
};

const showMeetingStatus = (status, consultName, date) => {
  Swal.fire({
    title: `${status ? "وقت شما تایید شده" : "نوبت شما در انتظار تایید است"}`,
    text: `نوبت درخواستی شما : ${date} با ${consultName}`,
    icon: `${status ? "success" : "info"}`,
  });
};

const submitNewMeeting = async() => {
  const consultNameElem = document.querySelector("#meeting-consultName")
  const dateElem = document.querySelector("#meeting-date")

  const newMeetingData = {
    requestedBy : getMe().name , 
    date : dateElem.value.trim(),
    isConfirmed : false,
    consultName : consultNameElem.value.trim()
  }

  if (!dateElem.value.trim() || !consultNameElem.value.trim()){
    iziToast.show({
      title : "اطلاعات معتبر نیست",
      message : "همه فیلد ها رو پر کنید" ,
      rtl : true ,
      color :"red",
      position : "topLeft"
    })
  }
  else {
    try {
      const newMeetingData = {
        requestedBy : getMe().name , 
        date : dateElem.value.trim(),
        isConfirmed : false,
        consultName : consultNameElem.value.trim()
      }
      const res = await fetch("https://yadegar-lawfirm.liara.run/meetings",{
        method : "POST",
        headers : {
          "Content-type" : "application/json"
        },
        body : JSON.stringify(newMeetingData)
      })
      const meetingResponse = await res.json()
      iziToast.show({

      })
    }
    catch(error) {
      iziToast.show({
        title: "مشکلی پیش اومده",
        message: "لطفا دقایقی دیگه امتحان کنید",
        color: "red",
        rtl: true,
        position: "topLeft",
      });
      dateElem.value = ""
      consultNameElem.value = ""
    }
  }
}


const showAllUserTransactions = async () => {
  const generalInformationWrapper = document.querySelector(".general__information-wrapper")
  const transactionListWrapper = document.querySelector(".transactions__list tbody")

  try {
    const res = await fetch("https://yadegar-lawfirm.liara.run/transactions")
    const transactionsList = await res.json()
    const filteredTransaction = transactionsList.filter(transaction => transaction.createdBy === getMe().name)
    const successedTransaction = filteredTransaction.filter(transaction => transaction.isCompleted === true)
    let totalAmount = successedTransaction.reduce((prev , next) => prev.amount + next.amount)


    transactionListWrapper.innerHTML = ''
    filteredTransaction.forEach((transaction,index) => {
      transactionListWrapper.insertAdjacentHTML("beforeend" , 
        `
        <tr class="flex items-center justify-between pr-2.5 md:px-0 child:text-center sm:child:w-[110px] child:md:w-[200px]">
                <td>${index + 1}</td>
                <td>${transaction.title}</td>
                <td class="hidden md:inline-block">${transaction.amount.toLocaleString()}</td>
                <td class="hidden sm:inline-block text-left line-clamp-1">${transaction.code}</td>
                <td class="hidden md:inline-block">
                  <span class="px-4 py-1.5 ${transaction.isCompleted ? "bg-emerald-400 text-emerald-700" : transaction.isPending ? "bg-yellow-400 text-yellow-700" : "bg-red-400 text-red-700"} rounded-full">${
                    transaction.isCompleted ? "موفق" : transaction.isPending ? "در انتظار پاسخ" : "ناموفق"
                  }</span>
                </td>
                <td class="md:hidden">
                  <button onclick="showTransactionDetail(${transaction.isCompleted},${transaction.isPending},'${transaction.amount}' , '${transaction.title}' , '${transaction.code}')" class="bg-primary-1 text-secondary-1 px-3 py-1 hover:text-white transition-all duration-300 delay-100 rounded-xl">مشاهده</button>
                </td>
        </tr>
        `
      )
    })

    generalInformationWrapper.innerHTML = ''
    generalInformationWrapper.insertAdjacentHTML("beforeend" , 
      `
      <div class="general__info w-auto xl:w-72 bg-primary-2 flex flex-grow md:flex-grow-0 items-center gap-x-2.5 md:gap-x-4.5 px-5 py-3.5 sm:px-4 sm:py-2.5 md:p-3.5  rounded-xl">
      <div class="general__info-icon bg-primary-3 h-full p-2.5 md:p-4.5 rounded-xl">
        <svg class="w-6 lg:w-7 h-6 lg:h-7">
          <use href="#credit-card"></use>
        </svg>
      </div>
      <div class="general_info-text flex flex-col gap-y-2 md:gap-y-3.5">
        <span class="font-DanaDemi text-base">کل تراکنش ها</span>
        <span class="font-Dana text-sm">${filteredTransaction.length} تراکنش</span>
      </div>
    </div>
      `

    )
    generalInformationWrapper.insertAdjacentHTML("beforeend" , 
      `
      <div class="general__info w-auto xl:w-72 bg-primary-2 flex flex-grow md:flex-grow-0 items-center gap-x-2.5 md:gap-x-4.5 px-5 py-3.5 sm:px-4 sm:py-2.5 md:p-3.5 lg:px-4.5  rounded-xl">
      <div class="general__info-icon bg-primary-3 h-full p-2.5 md:p-4.5 rounded-xl">
        <svg class="w-6 lg:w-7 h-6 lg:h-7">
          <use href="#dollar-currency"></use>
        </svg>
      </div>
      <div class="general_info-text flex flex-col gap-y-2 md:gap-y-3.5">
        <span class="font-DanaDemi text-base"> مجموع تراکنش ها</span>
        <span class="font-Dana text-sm">${typeof totalAmount === "object" ? totalAmount.amount.toLocaleString() : totalAmount.toLocaleString()} تومان</span>
      </div>
    </div>
      `

    )
    generalInformationWrapper.insertAdjacentHTML("beforeend" , 
    `
    <div class="general__info w-auto xl:w-72 bg-emerald-500 flex flex-grow md:flex-grow-0 items-center gap-x-2.5 md:gap-x-4.5 px-5 py-3.5 sm:px-4 sm:py-2.5 md:p-3.5  rounded-xl">
    <div class="general__info-icon bg-emerald-300 h-full p-2.5 md:p-4.5 rounded-xl">
      <svg class="w-6 lg:w-7 h-6 lg:h-7">
        <use href="#check-badge"></use>
      </svg>
    </div>
    <div class="general_info-text flex flex-col gap-y-2 md:gap-y-3.5">
      <span class="font-DanaDemi text-base"> تراکنش های موفق</span>
      <span class="font-Dana text-sm">${successedTransaction.length} تراکنش</span>
    </div>
  </div>
    `

  )
  }
  catch(error){
    iziToast.show({
      title: "مشکلی پیش آمد",
      message: "صفحه را refresh یا با پشتیبانی تماس بگیرید",
      rtl: true,
      color: "red",
      position: "topLeft",
    });
  }
}

const showTransactionDetail = (isCompleted , isPending , amount , title , code) => {
  Swal.fire({
    icon : isCompleted ? "success" : isPending ? "warning" : "error",
    title , 
    text : `مبلغ ${amount.toLocaleString()} با کد پیگیری ${code}`
  })
}
export {
  displayAccordion,
  fetchUserMessages,
  sendUserMessage,
  showMessageDetail,
  showAnsweredMessageDetail,
  showUserMeetingDates,
  showMeetingStatus,
  submitNewMeeting,
  showAllUserTransactions,
  showTransactionDetail
};
