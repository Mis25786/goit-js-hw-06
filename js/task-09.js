//! Завдання 9
//todo Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку
//todo на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

//*=======================================================

const button = document.querySelector(".change-color");
console.log(button);

button.addEventListener("clic", changeColor);

const spanColorText = document.querySelector(".color");
// console.log(spanColorText);

function changeColor(event) {
  event.preventDefault();
  console.log("object");
  console.log(event.currentTarget);

  // const backgraundColorBody = document.body.style.backgroundColor;
  // console.dir(backgraundColorBody);

  //=========================================
  // currentTarget = getRandomHexColor();
  //==========================================
  // function getRandomHexColor() {
  //   return (backgraundColorBody = `#${Math.floor(
  //     Math.random() * 16777215
  //   ).toString(16)}`);
  // }
  //=========================================

  // spanColorText.textContent = backgraundColorBody;
}
