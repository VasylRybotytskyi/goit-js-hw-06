const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

ingredients.forEach((ingredientsItems) => {
const liEl = document.createElement('li');

liEl.innerHTML = ingredientsItems;
ulEl.append(liEl)
});

console.log(ulEl)
