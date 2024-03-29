import { showSwal } from "./utils.js";

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

          <a href='practiceArea.html?area=${practiceArea.shortName}'
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
        <div class="history__left-percent relative w-full bg-white h-1">
          <div class="history__left-percent-bar absolute inset-0 h-full bg-primary-1" style="width:${casePercent.percent}%"></div>
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
          <img src="./assets/images/${client.avatarHref}" alt="client-avatar" class="w-16 h-16 rounded-full">
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
          <img src="./assets/images/${client.avatarHref}" alt="client-avatar" class="w-16 h-16 rounded-full">
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
            <a href="#" class="lawyer-team__social-media-link">
              <svg class="w-6 h-6">
                <use href="#instagram"></use>
              </svg>
            </a>
            <a href="#" class="lawyer-team__social-media-link">
              <svg class="w-6 h-6">
                <use href="#facebook"></use>
              </svg>
            </a>
            <a href="#" class="lawyer-team__social-media-link">
              <svg class="w-6 h-6">
                <use href="#twitter"></use>
              </svg>
            </a>
            <a href="#" class="lawyer-team__social-media-link">
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

  const isAnswered = false
  const answerBody = {
    creator : "Mahdi" , 
    answerBody : null
  }

  const newMessage = {
    userName: userFullNameElem.value.trim(),
    userEmail: userEmailElem.value.trim(),
    userPhone: userPhoneElem.value.trim(),
    userSubject: userSubjectElem.value.trim(),
    message: messageBodyElem.value.trim(),
    isAnswered,
    answerBody
  };
  
  const res = await fetch('https://yadegar-lawfirm.liara.run//messages',{
    method : "POST" , 
    headers : {
      "Content-type" : "application/json"
    },
    body : JSON.stringify(newMessage)
  })
};

const showRecentBlog = async () => {
  const recentBlogWrapper = document.querySelector('#recent-blog__cards')
  const res = await fetch('https://yadegar-lawfirm.liara.run/recent-blog')
  const blogs = await res.json() 

  blogs.forEach(blog => {
    recentBlogWrapper.insertAdjacentHTML('beforeend' , 
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
    )
  })
}

export {
  displayPracticeArea,
  showCaseSuccessPercent,
  showClientComments,
  displayLawyerTeam,
  sendClientMessage,
  showRecentBlog
};
