//! Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//! підставляє його поточне значення в span#name-output.

//! Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const input = document.querySelector("#name-input");
const input = document.getElementById("name-input");
// console.log(input);

input.addEventListener("input", onInputChange);
// console.log(input);

const span = document.getElementById("name-output");
console.log(span);

function onInputChange(event) {
  console.dir(event.currentTarget.value);
  span.textContent = event.currentTarget.value;
}

//?================================ або ==============

// function onInputChange(event) {
//   if (event.currentTarget.value === "") {
//     span.textContent = "Anonymous";
//   } else {
//     span.textContent = event.currentTarget.value;
//   }
// }
