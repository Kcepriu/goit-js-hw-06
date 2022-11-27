function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const START_SIZE_ELEMENT = 30;
const DELTA_SIZE_NEXT_ELEMENT = 10;

const divBoxesElen = document.querySelector('#boxes');

const btnCreateEl = document.querySelector('[data-create]');
const btnDectroyEl = document.querySelector('[data-destroy]');

const textCountEl = document.querySelector('#controls > input');

btnCreateEl.addEventListener('click', onCreateElements);
btnDectroyEl.addEventListener('click', onDestroyElements);

function onCreateElements() {
  const countElement = Number(textCountEl.value);

  if (!countElement) {
    textCountEl.focus();
    alert('Не введено кількіть едементів.');
    return;
  }

  const newsElements = createNewsElements(countElement);
  divBoxesElen.append(...newsElements);

  console.log(countElement);
}

function createNewsElements(countElement) {
  const newsElements = [];
  for (let i = 1; i <= countElement; i++) {
    newsElements.push(createNewsElement(i));
  }

  return newsElements;
}

function createNewsElement(number) {
  const newElement = document.createElement('div');
  newElement.style.width =
    START_SIZE_ELEMENT + (number - 1) * DELTA_SIZE_NEXT_ELEMENT + 'px';
  newElement.style.height = newElement.style.width;
  newElement.style.backgroundColor = getRandomHexColor();
  newElement.style.display = 'Block';
  newElement.style.marginBottom = '4px';

  return newElement;
}

function onDestroyElements() {
  divBoxesElen.innerHTML = '';
}
