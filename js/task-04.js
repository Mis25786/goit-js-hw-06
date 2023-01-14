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

const addBtn = document.querySelector('[data-action="increment"]');
// console.log(addBtn);

const subtractionBtn = document.querySelector('[data-action="decrement"]');
// console.log(subtractionBtn);

const totalNumber = document.getElementById("value");
// // console.log(totalNumber);

// //! 1) Створи змінну counterValue її значенням 0.
let counterValue = 0;
// console.log("тут лічильник:", counterValue);

// //! 2) Додати слухачів кліків до кнопок які збільшують або зменшують значення лічильника
addBtn.addEventListener("click", plusBtn);
// console.log(addBtn);

subtractionBtn.addEventListener("click", minusBtn);
// console.log(subtractionBtn);

// //! 3) Оновлюй інтерфейс новим значенням змінної counterValue.
// // console.log(totalNumber);

function plusBtn(event) {
  counterValue += 1;
  totalNumber.textContent = counterValue;
}
function minusBtn() {
  counterValue -= 1;
  totalNumber.textContent = counterValue;
}
// /////////////////////////////////////////////////////
// function calc(value) {
//   switch (value) {
//     case increment:
//       console.log(value);
//       counterValue += 1;
//       break;

//     case decrement:
//       console.log(value);
//       counterValue -= 1;
//       break;
//   }
//   return counterValue;
//   console.log(counterValue);
// }

// function plusBtn(event) {
//   console.log(event.currentTarget.dataset.action);
//   counterValue += 1;
//   totalNumber.textContent = counterValue;
// }
// function minusBtn(event) {
//   console.log(event.currentTarget.dataset.action);
//   counterValue -= 1;
//   totalNumber.textContent = counterValue;
// }

////////////////////////////////////////////
