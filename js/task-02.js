const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("ul#ingredients");

ingredients.forEach((ingredients) => {

  const li=document.createElement('li');

  li.textContent= ingredients;

  li.classList.add('item')

  list.appendChild(li);
});