const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

const arrayIngredients = ingredients.map((ingredientsItem) => {
  let liEl = document.createElement('li');
  liEl.textContent = ingredientsItem;
  liEl.classList.add('item');

return liEl
});

ulEl.append(...arrayIngredients)
