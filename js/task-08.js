//! Завдання 8
//todo Напиши скрипт управління формою логіна.

//* <form class="login-form">
//*   <label>
//*     Email
//*     <input type="email" name="email" />
//*   </label>
//*   <label>
//*     Password
//*     <input type="password" name="password" />
//*   </label>
//*   <button type="submit">Login</button>
//* </form>

//todo Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.

//todo Під час відправлення форми сторінка не повинна перезавантажуватися.

//todo Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//todo що всі поля повинні бути заповнені.

//todo Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//todo де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//todo Для доступу до елементів форми використовуй властивість elements.

//todo Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector(".login-form");
// console.log(form);

form.addEventListener("submit", onSubmitForm);
// console.dir(form);

function onSubmitForm(event) {
  event.preventDefault();
  //   console.dir(event.currentTarget);

  const formEl = event.currentTarget.elements;
  //   console.log(formEl);

  //* задається => typ
  const email = formEl.email.value;
  //   console.log(email);
  const password = formEl.password.value;
  //   console.log(password);

  const formData = {
    email,
    password,
  };

  if (formEl.email.value === "" || formEl.password.value === "") {
    alert("Заповніть будь-ласка всі поля");
  } else if (
    formEl.email.value === email ||
    formEl.password.value === password
  ) {
    console.log(formData);
  }
  //*============================================
  // if (formEl.email.value === "" || formEl.password.value === "") {
  //   alert("Заповніть будь-ласка всі поля");
  // }
  //*============================================
  //   if (formEl.email.value === "") {
  //     alert("Заповніть будь-ласка всі поля");
  //   } else if (formEl.password.value === "") {
  //     alert("Заповніть будь-ласка всі поля");
  //   }
  //*============================================
  // const auditInput =
  //   formEl.email.value == "" || formEl.name.value == ""
  //     ? "Заповніть будь-ласка всі поля"
  //     : console.log(formData);

  //* виводимо об'єкт з данними в консоль
  // console.log(formData);

  //* очистити всі поля form
  form.reset();
}

//?======================================

//* збір данних з великих полів
//* ===========================
//   const formData = new formData(event.currentTarget);

//   formData.forEach((value, name) => {
//     console.log(name, value);
//   });

//   console.log(formData);
// }
