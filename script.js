// let tg = window.Telegram.WebApp;
// let user_id = tg.initDataUnsafe.user.id;
// let user_firstname = tg.initDataUnsafe.user.first_name;
// let username = tg.initDataUnsafe.user.username;
// tg.expand() // // метод позволяет растянуть окно на всю высоту.

// var helloElement = document.getElementById("hello");
// helloElement.textContent = `${user_firstname}, заполните объявление!`;

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

    let info = alertMessage;
    console.log(info);
});


// Отмена ввода при нажатии на свободное место
// Получаем ссылку на поле ввода по его ID

// Добавляем обработчик событий для клика в любом месте страницы
// document.addEventListener('click', function(event) {
//     // Проверяем, что клик не произошел внутри поля ввода
//     if (event.target !== inputField) {
//     // Закрываем клавиатуру, убрав фокус с поля ввода
//     inputField.blur();
//     }
// });

console.log("Привет, это тестовый вывод");
