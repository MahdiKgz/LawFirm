const login = async () => {
  const clientEmail = document.querySelector("#user-email");
  const clientPassword = document.querySelector("#user-password");

  const clientData = {
    email: clientEmail.value.trim(),
    password: clientPassword.value.trim(),
  };

  try {
    const res = await fetch("https://yadegar-lawfirm.liara.run/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(clientData),
    });

    const json = await res.json();

        
    if (json?.accessToken) {
      iziToast.show({
        title: `${json.user.name} خوش آمدید`,
        message: "با موفقیت وارد شدید",
        color: "green",
        rtl: true,
        position: "topLeft",
      });
      localStorage.setItem('accessToken' , JSON.stringify(json.accessToken))
      localStorage.setItem('userData' , JSON.stringify(json.user))
      setTimeout(() => {
        window.location.href = "index.html"
      }, 5000);
    } 
    if (json === "Cannot find user"){
      iziToast.show({
        title: "کاربر پیدا نشد",
        message: "اطلاعات خود را دوباره بررسی کنید",
        color: "red",
        rtl: true,
        position: "topLeft",
      });
    }
    if (json === "Incorrect password"){
      iziToast.show({
        title: "رمز عبور یا نام کاربری اشتباه است",
        message: "اطلاعات خود را دوباره بررسی کنید",
        color: "red",
        rtl: true,
        position: "topLeft",
      });
    }
    clientEmail.value = "";
    clientPassword.value = "";
  } catch (error) {
    iziToast.show({
      title: "مشکلی پیش آمد",
      message: "با پشتیبانی تماس بگیرید",
      color: "red",
      rtl: true,
      position: "topLeft",
    });
    throw new Error("Bad request")
  }
};

const register = async () => {
  const clientNameElem = document.querySelector("#user-name");
  const clientEmailElem = document.querySelector("#user-email");
  const clientPhoneElem = document.querySelector("#user-phone");
  const clientPasswordElem = document.querySelector("#user-password");
  let clientRole = "USER";

  const clientRegisterData = {
    name: clientNameElem.value.trim(),
    email: clientEmailElem.value.trim(),
    phone: clientPhoneElem.value.trim(),
    password: clientPasswordElem.value.trim(),
    role: clientRole,
  };

  if (
    !clientNameElem.value.trim() ||
    !clientEmailElem.value.trim() ||
    !clientPhoneElem.value.trim() ||
    !clientPasswordElem.value.trim()
  ) {
    iziToast.show({
      title: "اطلاعات معتبر نیست",
      message: "تمامی فیلد ها رو به درستی پر کنید",
      color: "red",
      rtl: true,
      position: "topLeft",
    });
    return;
  } else {
    const res = await fetch("https://yadegar-lawfirm.liara.run/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(clientRegisterData),
    });
    const json = await res.json();

    if (json?.accessToken) {
      iziToast.show({
        title: `${json.user.name}`,
        message: "با موفقیت ثبت نام شدید",
        color: "green",
        rtl: true,
        position: "topLeft",
      });
          
      localStorage.setItem('accessToken' , JSON.stringify(json.accessToken))
      localStorage.setItem('userData' , JSON.stringify(json.user))
      setTimeout(() => {
        window.location.href = "index.html"
      }, 5000);
    }
  }
};

export { login, register };
