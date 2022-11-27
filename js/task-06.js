const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlurInput);

function onBlurInput(event) {
  if (Number(inputEl.dataset.length) > inputEl.value.length) {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  } else {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  }
}
