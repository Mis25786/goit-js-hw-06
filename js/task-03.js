//! Завдання 3
//todo Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

//todo <ul class="gallery"></ul>

//todo Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>.
//todo Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

//todo Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//todo Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const option = images[0];

// //todo знаходимо тег Юл - галері
// const gallery = document.querySelector(".gallery");
// console.log(gallery);

// //todo створюємо елемент - Лі
// const element = document.createElement("li");
// console.log(element);

// //todo створюємо елемент - зображення
// const elementImg = document.createElement("img");
// console.log(elementImg);

// //todo додаємо атрибут юрл з посиланням
// elementImg.url = option.url;
// // console.log(element);

// //todo додаємо атрибут з альт - описом
// elementImg.alt = option.alt;
// // console.log(element);

// //todo ставимо картинку в Лі
// element.appendChild(elementImg);
// console.log(element);

// //todo привязуємо Лі до Юл - галері
// gallery.appendChild(element);
// console.log(gallery);

//! ///////////////////////////////////////////////

const galleryEl = ({ url, alt }) => {
  // console.log(element);

  return `<li> <img src='${url}' alt='${alt}' width='320' height='240' > </li>`;
};

console.log(images);

const gallery = document.querySelector(".gallery");

// console.log(galleryEl(images[0]));

const elementGallery = images.map(galleryEl).join("");
console.log(elementGallery);

gallery.insertAdjacentHTML("afterbegin", elementGallery);
// console.log(gallery);
