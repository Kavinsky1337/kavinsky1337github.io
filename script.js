let tg = window.Telegram.WebApp;
let user_id = tg.initDataUnsafe.user.id;
let user_firstname = tg.initDataUnsafe.user.first_name;
let username = tg.initDataUnsafe.user.username;
tg.expand() // // метод позволяет растянуть окно на всю высоту.

var helloElement = document.getElementById("hello");
helloElement.textContent = `${user_firstname}, заполните объявление!`;

let typeworkInput = document.getElementById("type-work");
let cityInput = document.getElementById("city");
let categoryworkInput = document.getElementById("category-work");
let fioInput = document.getElementById("fio");
let messageInput = document.getElementById("message");
let currencyInput = document.getElementById("currency");
let phoneInput = document.getElementById("phone");
let submitButton = document.getElementById("buttonSumbit");

submitButton.addEventListener('click', function() {
    let typeworkValue = typeworkInput.value;
    let cityValue = cityInput.value;
    let categoryworkValue = categoryworkInput.value;
    let fioValue = fioInput.value;
    let messageValue = messageInput.value;
    let currencyValue = currencyInput.value;
    let phoneValue = phoneInput.value;

    let alertMessage = `тип работы: ${typeworkValue}\nгород: ${cityValue}\nатегорию работы: ${categoryworkValue}\nимя: ${fioValue}\nо себе: ${messageValue}\nОплата: ${currencyValue}\nномер телефона: ${phoneValue}`;

    var testinfoElement = document.getElementById("testinfo");
    testinfoElement.textContent = alertMessage;
});


// Отмена ввода при нажатии на свободное место
const inputField = document.getElementById('inputField');
document.addEventListener('click', function(event) {
  if (event.target !== inputField) {
    inputField.blur();
  }
});
