//! Завдання 4
//todo Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його
//todo значення на одиницю.

// {
/* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */
// }

//todo Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй
//todo її значенням 0.

//todo Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.

//todo Оновлюй інтерфейс новим значенням змінної counterValue.

//! Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника
//! та ініціалізуй її значенням 0.
const counterValue = 0;
// console.log(counterValue);

const addBtn = document.querySelector('[data-action="decrement"]');
// console.log(addBtn);

const subtractionBtn = document.querySelector('[data-action="increment"]');
// console.log(subtractionBtn);

const totalNumber = document.querySelector("#value");
console.log(totalNumber);

//! Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
addBtn.addEventListener("clic", () => {});
console.log(addBtn);

subtractionBtn.addEventListener("clic", () => {});
console.log(subtractionBtn);

//todo
// addBtn.addEventListener("clic", () => {
//   console.log("bu");
// });

// subtractionBtn.addEventListener("clic");

// let total = 0;
// function addition() {
//   console.log((total += addBtn = 1));
// }
