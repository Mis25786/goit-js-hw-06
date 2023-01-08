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

// const newArrayEl = ingredients.forEach((element) => {
//   const newEl = document.createElement("li");
//   newEl.classList.add("item");
//   newEl.textContent = element;
// });
// console.log(newArrayEl);

/////////////
const newEl = document.createElement("li");
// console.log(newEl);

newEl.classList.add("item");
// console.log(newEl);

newEl.textContent = ingredients[i];
console.log(newEl);

for (let i = 0; i < ingredients.length; i += 1) {
  console.table((newEl.textContent = ingredients[i]));
}
