// Получаем ссылки на элементы
var startButton = document.getElementById('startButton');
var popupContainer = document.getElementById('popupContainer');
var submitButton = document.getElementById('submitButton');
var outputContainer = document.getElementById('output');

// Добавляем обработчик события на кнопку "Начать"
startButton.addEventListener('click', function() {
    popupContainer.style.display = 'block';
    startButton.style.display = 'none';
});

// Добавляем обработчик события на кнопку "Отправить"
submitButton.addEventListener('click', function() {
    // Получаем данные из полей ввода
    var inputs = document.querySelectorAll('.popup input[type="text"]');
    var inputData = {};
    inputs.forEach(function(input) {
        inputData[input.placeholder] = input.value;
    });


    // Создаем сохранение данных в localStorage
    localStorage.setItem('inputData', JSON.stringify(inputData));

     // Закрываем попап
     popupContainer.style.display = 'none';

     //Выведем данные на страницу
     var outputHTML = '<h2>Введенные данные:</h2><ul>';
    for (var key in inputData) {
        outputHTML += '<li>' + key + ' ' + inputData[key] + '</li>';
    }
    outputHTML += '</ul>';
    outputContainer.innerHTML = outputHTML;
});

window.addEventListener('click', function(event) {
    if (event.target == popupContainer) {
        popupContainer.style.display = 'none';
    }
});