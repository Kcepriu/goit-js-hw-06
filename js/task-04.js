let counterValue = 0;

const btnDecremetnRefs = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRefs = document.querySelector(
  'button[data-action="increment"]',
);

const tugleValue = incr => {
  counterValue += incr;
  const valueRefs = document.querySelector('#value');
  valueRefs.textContent = counterValue;
};

const handlerDecriment = () => tugleValue(-1);
const handlerIncrement = () => tugleValue(1);

btnDecremetnRefs.addEventListener('click', handlerDecriment);
btnIncrementRefs.addEventListener('click', handlerIncrement);
