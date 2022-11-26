const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridient = ingredients[0];

const arrayElements = ingredients.map(ingridient => {
  const newElement = document.createElement('li');
  newElement.textContent = ingridient;
  newElement.classList.add('item');

  return newElement;
});

const ingredientsRefs = document.querySelector('#ingredients');

ingredientsRefs.append(...arrayElements);
