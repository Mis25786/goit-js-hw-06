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
console.log(totalNumber);

//! 1) Створи змінну counterValue її значенням 0.
let counterValue = 0;
console.log(counterValue);

//! 2) Додати слухачів кліків до кнопок які збільшують або зменшують значення лічильника
addBtn.addEventListener("click", calc);
console.log(addBtn);

subtractionBtn.addEventListener("click", calc);
console.log(subtractionBtn);

//! 3) Оновлюй інтерфейс новим значенням змінної counterValue.
counterValue = totalNumber;
////////////////////////////////////////
// const calc = (value) => (value => {value.addBtn += counterValue || value.subtractionBtn -= counterValue }});

/////////////////////////////////////////////////////
function calc(value) {
  switch (value) {
    case value === addBtn:
      counterValue += 1;
      break;

    case value === subtractionBtn:
      counterValue -= 1;
      break;
  }
  // return counterValue;
}
// console.log(calc(addBtn));
// console.log(calc(subtractionBtn));
////////////////////////////////////////////
// let num1 = prompt("первое число");
// num1 = Number(num1);

// let num2 = prompt("второе число");
// num2 = Number(num2);

// let operator = prompt("оператор (/,+,*,-)");

// switch (operator) {
//   case "+":
//     console.log(num1 + num2);
//     break;
//   case "-":
//     console.log(num1 - num2);
// }
///////////////////////////////////////////
// let cost;
// const subscription = "premium";

// switch (subscription) {
//   case "free":
//     cost = 0;
//     break;

//   case "pro":
//     cost = 100;
//     break;

//   case "premium":
//     cost = 500;
//     break;

//   default:
//     console.log("Invalid subscription type");
// }

// console.log(cost); // 500
//////////////////////////////////////////
