const num_categories = document.querySelectorAll("ul#categories li.item").length;
console.log(num_categories);

const list = document.querySelector("ul#categories");
const items = list.querySelectorAll("li.item");
items.forEach((item) => {
    const header = item.querySelector("h2");
    const numElements = item.querySelectorAll("li").length;
    console.log(`Header: ${header.textContent}`);
    console.log(`Number of elements: ${numElements}`);
  });
  
  


