//! Завдання 6
//todo Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//todo перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

//* доступ до інпут
const input = document.getElementById("validation-input");
console.dir(input);

//* додаємо слухача до інпут
input.addEventListener("blur", focusColor);
console.dir(input);

//* переводимо data-length="6"=>'6'(рядок) в число
const textLength = Number(input.dataset.length);
// console.dir(textLength);

//* доступ до кольорів  ????????????????
// const colorGreen = document.getElementById("validation-input.valid");
// console.log(colorGreen);

//* отримуємо значення - введених синволів в інпут
function onInputChange(event) {
  console.log(event.currentTarget.value);
}

//* зміна кольору при введенні синволів в інпут
function focusColor(event) {
  if (event.currentTarget.value.length === textLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
  }
}
