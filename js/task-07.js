//! Завдання 7
//todo Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//todo і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті,
//todo перетягуючи повзунок, буде змінюватися розмір тексту.

//* <input id="font-size-control" type="range" min="16" max="96" />
//* <br />
//* <span id="text">Abracadabra!</span>

const input = document.getElementById("font-size-control");
// console.log(input);

const span = document.getElementById("text");
console.dir(span);

input.addEventListener("input", changeTextSpan);
console.log(input);

function changeTextSpan(event) {
  console.log((span.style.fontSize = `${event.currentTarget.value}px`));
}
