const showSwal = (title, icon, buttons, callback) => {
  swal({
    title,
    icon , 
    buttons,
  }).then((result) => callback(result));
};

const getUrlParam = (key) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key);
};

export {
    showSwal,
    getUrlParam
}