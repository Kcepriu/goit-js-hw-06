const formLoginEl = document.querySelector('.login-form');

formLoginEl.addEventListener('submit', onSubmetFormLogin);

function onSubmetFormLogin(event) {
  event.preventDefault();

  const formDataObj = converFormDataToObject(new FormData(event.currentTarget));

  if (!isAllFieldsAreFilled(formDataObj)) {
    alert('Всі поля повинні бути заповнені!');
    return;
  }

  event.currentTarget.reset();

  console.log(formDataObj);
}

function converFormDataToObject(formData) {
  const formDataObj = {};
  formData.forEach((value, key) => (formDataObj[key] = value));

  return formDataObj;
}

function isAllFieldsAreFilled(formDataObj) {
  for (const elem in formDataObj) {
    if (!formDataObj[elem]) return false;
  }

  return true;
}
