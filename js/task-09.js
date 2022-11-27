function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColorElem = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

btnChangeColorElem.addEventListener('click', onCliclBtnChangeColorElem);

function onCliclBtnChangeColorElem() {
  const newBackgtoundColor = getRandomHexColor();

  document.body.style.backgroundColor = newBackgtoundColor;
  textColorEl.textContent = newBackgtoundColor;
}
