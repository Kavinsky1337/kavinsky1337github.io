let tg = window.Telegram.WebApp;
let user_id = tg.initDataUnsafe.user.id;
let user_firstname = tg.initDataUnsafe.user.first_name;
let username = tg.initDataUnsafe.user.username;
tg.expand() // // метод позволяет растянуть окно на всю высоту.

var helloElement = document.getElementById("hello");
helloElement.textContent = `${user_firstname}, заполните объявление!`;


// Отмена ввода при нажатии на свободное место
const inputField = document.getElementById('inputField');
document.addEventListener('click', function(event) {
  if (event.target !== inputField) {
    inputField.blur();
  }
});