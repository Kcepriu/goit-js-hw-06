const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputRangeEl.addEventListener('input', onChangeRangeInput);

function onChangeRangeInput(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
}
