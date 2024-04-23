import { getUrlParam, showSwal } from "./utils.js";

const displayPracticeArea = async () => {
  const practiceAreaCardWrapper = document.querySelector(
    "#practice-area__content"
  );

  const res = await fetch("https://yadegar-lawfirm.liara.run/practiceArea");
  const practiceAreas = await res.json();
  practiceAreas.forEach((practiceArea) => {
    practiceAreaCardWrapper.insertAdjacentHTML(
      "beforeend",
      `
        <div
        class="practice-area__content-card bg-primary-2 px-10 py-12 sm:px-8 sm:py-10 md:px-12 md:py-14 rounded-xl"
      >
        <div
          class="practice-area__card-header flex flex-col gap-y-3 sm:gap-y-3.5 md:gap-y-4 pb-7 md:pb-9 border-b-2 border-b-gray-400/20"
        >
          <h1 class="font-MorabaBold text-xl">${practiceArea.title}</h1>
          <p class="font-Dana text-lg md:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div
          class="ractice-area__card-footer flex items-center justify-between pt-7 md:pt-9"
        >
          <svg class="w-[55px] h-12 text-primary-1">
            <use href="#${practiceArea.logoHref}"></use>
          </svg>

          <a href='practiceAreaDetail.html?area=${practiceArea.shortName}'
            class="bg-primary-3 hover:bg-primary-1 hover:text-zinc-800 px-8 py-5 sm:px-5 sm:py-3.5 md:px-9 md:py-4 rounded-xl transition-all duration-300"
          >
            بیشتر بخوانید
          </a>
        </div>
      </div>

        
        `
    );
  });
};

const showCaseSuccessPercent = async () => {
  const showCaseSuccessWrapper = document.querySelector(".history__left-body");

  const res = await fetch("https://yadegar-lawfirm.liara.run/case-success");
  const casesPercent = await res.json();

  casesPercent.forEach((casePercent) => {
    showCaseSuccessWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="history__left-body-percent flex flex-col gap-y-2.5 sm:gap-y-3.5 md:gap-y-3">
      <div class="history__left-body-percent__header flex items-center justify-between">
        <h1 class="font-DanaDemi text-lg sm:text-xl">${casePercent.category}</h1>
        <span class="font-DanaDemi text-lg sm:text-xl">${casePercent.percent}%</span>
      </div>
      <div class="history__left-body-percent__body">
        <div class="history__left-percent relative w-full bg-white h-1 rounded-full">
          <div class="history__left-percent-bar absolute inset-0 h-full bg-primary-1 rounded-full" style="width:${casePercent.percent}%"></div>
        </div>
      </div>
    </div>
    `
    );
  });
};

const showCaseSuccessPercentDark = async () => {
  const showCaseSuccessWrapper = document.querySelector(
    ".case-percent__statistics"
  );

  const res = await fetch("https://yadegar-lawfirm.liara.run/case-success");
  const casesPercent = await res.json();

  casesPercent.forEach((casePercent) => {
    showCaseSuccessWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="case-percent__statistics-body-percent w-full flex flex-col gap-y-2.5 sm:gap-y-3.5 md:gap-y-3">
      <div class="case-percent__statistics-body-percent__header flex items-center justify-between">
        <h1 class="font-DanaDemi text-lg sm:text-xl">${casePercent.category}</h1>
        <span class="font-DanaDemi text-lg sm:text-xl">${casePercent.percent}%</span>
      </div>
      <div class="case-percent__statistics-body-percent__body">
        <div class="history__left-percent relative w-full bg-white h-1 rounded-full">
          <div class="case-percent__statistics-percent-bar absolute inset-0 h-full bg-primary-2 rounded-full" style="width:${casePercent.percent}%"></div>
        </div>
      </div>
    </div>
    `
    );
  });
};

const showClientComments = async () => {
  const commentWrapper = document.querySelector("#client-comment-wrapper");

  const res = await fetch("https://yadegar-lawfirm.liara.run/client-comment");
  const clientCommentData = await res.json();

  clientCommentData.forEach((client) => {
    // Check for odd comments
    if (!(client.id % 2 == 0)) {
      commentWrapper.insertAdjacentHTML(
        "beforeend",
        `
      <div class="client-comment__odd flex flex-col-reverse md:flex-col gap-y-6 sm:gap-y-6 md:gap-y-5 md:max-w-[336px]">
        <div class="client-comment__odd-header flex justify-start md:justify-end gap-x-2.5 md:gap-x-3">
          <img src="./assets/images/index/${client.avatarHref}" alt="client-avatar" class="w-16 h-16 rounded-full">
          <div class="flex flex-col items-start md:gap-y-1.5">
            <h1 class="client-comment__name font-DanaDemi text-lg md:text-xl mt-1.5 md:mt-2.5">${client.name}</h1>
            <span class="client-comment__job font-Dana tracking-tighter">${client.job}</span>
          </div>
        </div>
        <div class="client-comment__odd-body bg-primary-3 flex flex-col gap-y-10 md:gap-y-8 px-11 py-8 md:px-12 md:py-[66px] rounded-bl-4xl md:rounded-bl-none md:rounded-tl-4xl">
          <svg class="w-8 h-6">
            <use href="#quote"></use>
          </svg>
          <p class="font-DanaMedium text-lg md:text-base md:max-w-[239px] pb-8 sm:pb-0">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
    </div>
      `
      );
    } else {
      commentWrapper.insertAdjacentHTML(
        "beforeend",
        `
      <div class="client-comment__even flex flex-col-reverse gap-y-6 sm:gap-y-6 md:gap-y-5 md:max-w-[336px]">
        <div class="client-comment__even-header flex justify-start md:justify-end gap-x-2.5 md:gap-x-3">
          <img src="./assets/images/index/${client.avatarHref}" alt="client-avatar" class="w-16 h-16 rounded-full">
          <div class="flex flex-col items-start md:gap-y-1.5">
            <h1 class="client-comment__name font-DanaDemi text-lg md:text-xl mt-1.5 md:mt-2.5">${client.name}</h1>
            <span class="client-comment__job font-Dana tracking-tighter">${client.job}</span>
          </div>
        </div>
        <div class="client-comment__even-body bg-primary-3 flex flex-col gap-y-10 md:gap-y-8 px-11 py-8 md:px-12 md:py-[66px] rounded-bl-4xl sm:rounded-bl-none sm:rounded-br-4xl md:rounded-br-none md:rounded-bl-[47px]">
          <svg class="w-8 h-6">
            <use href="#quote"></use>
          </svg>
          <p class="font-DanaMedium text-lg md:text-base md:max-w-[239px] pb-8 sm:pb-0">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
            برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
      
      `
      );
    }
  });
};

const displayLawyerTeam = async () => {
  const laywerTeamCardWrapper = document.querySelector(".lawyer-team__body");

  const res = await fetch("https://yadegar-lawfirm.liara.run/lawyer-team");
  const lawyerTeamData = await res.json();

  lawyerTeamData.forEach((data) => {
    laywerTeamCardWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="lawyer-team__card w-auto sm:max-w-[250px] md:max-w-[388px]">
      <div class="lawyer-team__card-img relative">
        <img class="rounded-xl" alt="lawyer" src="${data.profileHref}">
        <div class="absolute bg-secondary-3 border border-gray-400/20 flex flex-col sm:gap-y-5 md:gap-y-6 w-[90%] sm:w-[80%] right-[5%] -bottom-[15%] md:h-[180px] px-4.5 py-2.5 py- sm:px-3 sm:py-2 md:px-6 md:py-4 sm:-bottom-16 sm:right-[11%] md:-bottom-20 md:right-[10%] rounded-xl">
          <div class="lawyer-team__social-media flex justify-center items-center gap-x-3 sm:py-2.5 md:py-3 py-4.5 sm:gap-y-5 md:gap-x-6">
            <a aria-label="social-media-link" href="#" class="lawyer-team__social-media-link">
              <svg class="w-6 h-6">
                <use href="#instagram"></use>
              </svg>
            </a>
            <a aria-label="social-media-link" href="#" class="lawyer-team__social-media-link">
              <svg class="w-6 h-6">
                <use href="#facebook"></use>
              </svg>
            </a>
            <a aria-label="social-media-link" href="#" class="lawyer-team__social-media-link">
              <svg class="w-6 h-6">
                <use href="#twitter"></use>
              </svg>
            </a>
            <a aria-label="social-media-link" href="#" class="lawyer-team__social-media-link">
              <svg class="w-6 h-6">
                <use href="#pintrest"></use>
              </svg>
            </a>
          </div>
          
          <div class="lawyer-team__info flex flex-col items-center justify-center border-t-2 border-t-primary-1 py-3.5 sm:py-2.5 md:py-5">
            <h1 class="font-DanaMedium text-lg sm:text-base md:text-lg">${data.name}</h1>
            <span class="font-Dana text-base sm:text-sm md:text-base text-primary-1">${data.position}</span>
          </div>
        </div>
      </div>
  </div>
    `
    );
  });
};

const sendClientMessage = async () => {
  const userFullNameElem = document.querySelector("#client-name");
  const userEmailElem = document.querySelector("#client-email");
  const userPhoneElem = document.querySelector("#client-phone");
  const userSubjectElem = document.querySelector("#client-subject");
  const messageBodyElem = document.querySelector("#client-message");

  const isAnswered = false;
  const answerBody = {
    creator: "Mahdi",
    answerBody: null,
  };

  const newMessage = {
    userName: userFullNameElem.value.trim(),
    userEmail: userEmailElem.value.trim(),
    userPhone: userPhoneElem.value.trim(),
    userSubject: userSubjectElem.value.trim(),
    message: messageBodyElem.value.trim(),
    isAnswered,
    answerBody,
  };

  const res = await fetch("https://yadegar-lawfirm.liara.run/messages", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newMessage),
  });

  userFullNameElem.value = "";
  userEmailElem.value = "";
  userPhoneElem.value = "";
  userSubjectElem.value = "";
  messageBodyElem.value = "";
};

const showRecentBlog = async () => {
  const recentBlogWrapper = document.querySelector("#recent-blog__cards");
  const res = await fetch("https://yadegar-lawfirm.liara.run/recent-blog");
  const blogs = await res.json();

  blogs.forEach((blog) => {
    recentBlogWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="recent-blog__card">
      <div class="recent-blog__card-header md:max-w-[443px] overflow-hidden">
        <img class="recent-blog__card-image rounded-t-xl" alt="image" src="${blog.cover}">
      </div>
      <div class="recent-blog__card-body">
        <div class="recent-blog__card-title flex items-center gap-x-2 md:gap-x-2.5 text-primary-1 py-3.5 sm:py-4.5 md:py-3 text-base md:text-lg border-b-2 border-b-gray-500">
          <span>مشاوره حقوقی</span>
          <span>|</span>
          <span>شنبه 4 فروردین 1403</span>
        </div>
        <div class="recent-blog__card-content flex flex-col items-start gap-y-4 sm:gap-y-6 md:gap-y-3 py-5 md:py-6">
            <h1 class="font-DanaDemi text-lg/6 md:text-xl/[48px] line-clamp-1">
            ${blog.title}
            </h1>
            <span class="font-DanaMedium text-base/6 md:text-base/5">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </span>
            <a href="#" class="text-primary-1 text-lg md:text-base">بیشتر بخوانید</a>
        </div>
      </div>
    </div>
    
    `
    );
  });
};

const showTeamValues = async () => {
  const cardWrapper = document.querySelector(".offer-value__content");

  const res = await fetch("https://yadegar-lawfirm.liara.run/values");
  const values = await res.json();

  values.forEach((value) => {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="offer-value__card w-full flex flex-col items-start gap-y-3.5 md:gap-y-6 px-12 py-14 md:px-[55px] md:py-[62px] bg-primary-3 rounded-xl">
      <div class="offer-value__card-header">
        <div class="w-16 h-16 md:w-[73px] md:h-[73px] flex justify-center items-center p-2 md:p-1 rounded-full bg-primary-2">
          <svg class="w-[37px] h-[27px]">
            <use href="#${value.iconHref}"></use>
          </svg>
        </div>
      </div>
      <div class="offer-value__card-body flex flex-col items-start gap-y-3.5 md:gap-y-2.5">
        <h1 class="font-DanaDemi text-lg/10 md:text-xl/10">
          ${value.title}
        </h1>
        <span class="text-gray-500 text-base">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
        </span>
      </div>
    </div>
    `
    );
  });
};

const changeTitle = () => {
  const pageTitleCategory = getUrlParam("area");
  const pageTitleElem = document.querySelector("#practice-area-title");
  let pageTitle = null;

  if (!pageTitleCategory) {
    pageTitle = "زمینه های کاری";
  }
  switch (pageTitleCategory) {
    case "bussiness":
      pageTitle = "قانون کسب و کار";
      break;
    case "construction":
      pageTitle = "قانون ساخت و ساز";
      break;
    case "accident":
      pageTitle = "قانون تصادفات رانندگی";
      break;
    case "wrongful-death":
      pageTitle = "قانون قتل غیر عمد";
      break;
    case "criminal":
      pageTitle = "قانون جرایم کیفری";
      break;
    case "family":
      pageTitle = "قانون خانواده";
      break;
  }

  pageTitleElem.innerHTML = pageTitle;
};

const showSuccessfulCases = async () => {
  const successfulCaseCardWrapper = document.querySelector(
    "#successful-case-wrapper"
  );
  const res = await fetch(
    "https://yadegar-lawfirm.liara.run/recent-success-cases"
  );
  const successfulCases = await res.json();

  successfulCases.forEach((successfulCase) => {
    successfulCaseCardWrapper.insertAdjacentHTML(
      "beforeend",
      `
  <div class="case__card bg-secondary-1 rounded-xl group">
      <div class="case__card-img relative flex justify-center items-center">
          <img alt="case-card" src=${successfulCase.imageHref} class="case-card__image rounded-t-xl"/>
          <p class="absolute flex opacity-0 invisible group-hover:visible group-hover:opacity-100 justify-center items-center bg-secondary-1 px-8 py-3.5 md:py-7 md:px-20 rounded-xl transition-all delay-100 duration-300">
              ${successfulCase.caseResult} میلیون تومان
          </p>
      </div>
      <div class="card-card__content flex flex-col gap-y-3.5 md:gap-y-5 px-5 py-8 md:px-14 md:py-12">
          <div class="card-case__date-title flex flex-col gap-y-3 md:gap-y-2.5">
              <span class="text-primary-1">${successfulCase.date}</span>
              <h1 class="font-DanaDemi text-lg/8 md:text-xl/10">
                  ${successfulCase.title}
              </h1>   
          </div>
          <div class="card-case__text text-base/6 md:text-base/8">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </div>
          <div class="card-case__read-more">
              <a href="#" class="card-case__link text-base/8 md:text-base/10 group-hover:text-primary-1 transition-all delay-100 duration-300">بیشتر بخوانید</a>
          </div>
      </div>
  </div>
  `
    );
  });
};

const showOffersCards = async () => {
  const offerCardWrapper = document.querySelector("#offer-card-wrapper");

  const res = await fetch("https://yadegar-lawfirm.liara.run/plans");
  const plans = await res.json();


  
  plans.forEach((plan) => {
    offerCardWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="card bg-secondary-1 w-[340px] h-auto sm:w-[400px] md:px-16 py-8 sm:py-9 md:py-11 rounded-xl">
      <div class="card-header flex flex-col items-center justify-center gap-y-3.5 md:gap-y-2.5 pb-8 sm:pb-9 md:pb-11 border-b-2 border-b-[#3A4553]">
        <h1 class="font-MorabaMedium text-3xl/10 md:text-3xl/[48px]">${plan.plan_title}</h1>
        <span class="font-DanaMedium text-primary-1 text-lg">${plan.plan_subtitle}</span>
      </div>
      <div class="card-body flex flex-col items-center justify-center gap-y-10 md:gap-y-8 mt-10 md:mt-8">
        <div class="flex flex-col items-center justify-center gap-y-2.5 md:gap-y-3">
          <span class="text-3xl text-primary-1"> ${plan.price_per_case} تومان</span>
          <span class="bg-primary-2 text-sm md:text-base px-5 md:px-7 py-2 md:py-1.5 rounded-md">به ازای هر پرونده</span>
        </div>
        <div class="supported-case w-full md:mt-4">
          <p class="border-t-2 border-t-[#3A4553] w-full text-center py-4.5 md:py-5">
            تصادفات جدی   
          </p>
          <p class="border-t-2 border-t-[#3A4553] w-full text-center py-4.5 md:py-5">
            تصادفات تراکتور   
          </p>
          <p class="border-t-2 border-t-[#3A4553] w-full text-center py-4.5 md:py-5">
              تصادفات نیمه سنگین
          </p>
          <p class="border-t-2 border-t-[#3A4553] w-full text-center py-4.5 md:py-5">
              -
          </p>
          <p class="border-t-2 border-t-[#3A4553] w-full text-center py-4.5 md:py-5">
              -
          </p>
        </div>
        <div>
          <button class="text-xl border border-primary-1 hover:bg-primary-1 hover:text-primary-2 px-25 py-5 sm:px-28 sm:py-6 md:px-24 md:py-7 rounded-xl transition-all duration-300 delay-100">بزن بریم</button>
        </div>
      </div>
    </div>
    `
    );
  });
};

const showFAQCards = async () => {
  const faqWrapper = document.querySelector('.faq__card-wrapper')
  const res = await fetch('https://yadegar-lawfirm.liara.run/faq')
  const faqs = await res.json()

  faqs.forEach(faq => {
    faqWrapper.insertAdjacentHTML('beforeend' , 
  
  `
  <div class="faq__card flex flex-col items-start w-full gap-y-5 md:gap-y-4 pb-9 md:pb-[60px] border-b-2 border-b-gray-200">
      <h1 class="font-MorabaBold text-2xl/8 md:text-3xl/9 text-wrap">${faq.question}</h1>
      <span class="font-DanaMedium text-gray-400 text-base md:text-lg">
        ${faq.answer}
      </span>
  </div>
  `)
  })
}

export {
  displayPracticeArea,
  showCaseSuccessPercent,
  showClientComments,
  displayLawyerTeam,
  sendClientMessage,
  showRecentBlog,
  showCaseSuccessPercentDark,
  showTeamValues,
  changeTitle,
  showSuccessfulCases,
  showOffersCards,
  showFAQCards
};
