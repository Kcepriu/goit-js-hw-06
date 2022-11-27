const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputRangeEl.addEventListener('input', onChangeRangeInput);

setFontSize(textEl, inputRangeEl.value);

function onChangeRangeInput(event) {
  setFontSize(textEl, event.currentTarget.value);
}

function setFontSize(element, fonSize) {
  element.style.fontSize = fonSize + 'px';
}
