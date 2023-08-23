const categories = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const header = category.querySelector('h2');
  const elements = category.querySelectorAll('li');
  console.log(`Category: ${header.textContent}`);
  console.log(`Number of elements: ${elements.length}`);
});