//! Завдання 1
//todo Напиши скрипт, який:

//todo 1) Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

//todo 2) Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст
//todo заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

//todo В результаті, в консолі будуть виведені наступні повідомлення.
//?============================
const getEl = categories.querySelectorAll(".item");
console.log(`Number of categories: ${getEl.length}`);

const titleEndNumberOfItems = getEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.childElementCount}`);
});

/////////////////////////////////////
// const items = document.querySelectorAll(".item");
// Array.prototype.forEach.call(items, (element) => {
//   const title = element.querySelector("h2").innerHTML;
//   const itemsLength = element.querySelectorAll("li").length;
//   console.log(`Категория: ${title} / Количество элементов: ${itemsLength}`);
// });
////////////////////////////////////
// const ul = Array.from(document.querySelector("#categories").children);
// for (let elem of ul) {
//   let category = elem.firstElementChild.textContent;
//   let quantityElem = elem.lastElementChild.children.length;
//   console.log(`Категория: ${category} \nКоличество элементов: ${quantityElem}`);
// }
/////////////////////////////
// const categories = document.querySelector("#categories");
// console.log(categories);
// const elements = [...categories.children];
// console.log(elements);

// console.log(`Number of categories: ${categories.childElementCount} `);

// elements.forEach((element) => {
//   console.log(`Category: ${element.firstElementChild.textContent}`);
//   console.log(`Elements: ${element.lastElementChild.childElementCount}`);
// });
/////////////xxxxxxxx////////
// const categories = document.querySelector(".item");
// console.log(categories);
// console.log(`Number of categories: ${categories.length} `);

// const categoriesEL = categories.forEach((element) => {
//   console.log(`Category: ${element.firstElementChild.textContent}`);
//   console.log(`Elements: ${element.querySelector("li").length}`);
// });
//?============================
// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
