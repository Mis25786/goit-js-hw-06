//! Завдання 2
//todo Напиши скрипт, який для кожного елемента масиву ingredients:

//todo Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//todo Додасть назву інгредієнта як його текстовий вміст.
//todo Додасть елементу клас item.
//todo Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const element = ingredients[0];
// console.log(element);

// const newEl = document.createElement("li");
// // console.log(newEl);
// newEl.classList.add("item");
// // console.log(newEl);
// newEl.textContent = element;
// console.log(newEl);

// for (let i = 0; i < ingredients.length; i += 1) {
//   console.table(ingredients[i]);
// }
//! ////////////////////////////////////////////////////////////
// //todo знайти Юл
const ingradientsEl = document.querySelector("#ingredients");

///todo масив Лі
const elementsUl = [];

for (let i = 0; i < ingredients.length; i += 1) {
  console.log(ingredients[i]);

  const newEl = document.createElement("li");
  newEl.classList.add("item");
  newEl.textContent = ingredients[i];

  //   //todo додаємо до масиву всі Лі
  elementsUl.push(newEl);
}
console.log(elementsUl);

// //todo додати Лі до Юл (розпилюємо масив на окремі елементи)
ingradientsEl.append(...elementsUl);
//! /////////////////////////////////////////////////////////////
//? альтернативний запис =====================================
// //todo знайти Юл
// const ingradientsEl = document.querySelector("#ingredients");

// const elementsUl = ingredients.map((element) => {
//   const newEl = document.createElement("li");
//   newEl.classList.add("item");
//   newEl.textContent = element;

//   return newEl;
// });

// // todo додати Лі до Юл (розпилюємо масив на окремі елементи)
// ingradientsEl.append(...elementsUl);

//! /////////////////////////////////////////////////////////////
//? запис у вигляді функції =====================================
// //todo знайти Юл
// const ingradientsEl = document.querySelector("#ingredients");

// const makeIngredients = (elements) => {
//   return elements.map((element) => {
//     const newEl = document.createElement("li");
//     newEl.classList.add("item");
//     newEl.textContent = element;

//     return newEl;
//   });
// };

// const element = makeIngredients(ingredients);

// // todo додати Лі до Юл (розпилюємо масив на окремі елементи)
// ingradientsEl.append(...element);
