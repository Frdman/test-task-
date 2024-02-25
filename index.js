// Получаем ссылки на элементы
var startButton = document.getElementById('startButton');
var popupContainer = document.getElementById('popupContainer');
var submitButton = document.getElementById('submitButton');
var outputContainer = document.getElementById('output');

// Добавляем обработчик события на кнопку "Начать"
startButton.addEventListener('click', function() {
    // Отображаем попап
    popupContainer.style.display = 'block';
});

// Добавляем обработчик события на кнопку "Отправить"
submitButton.addEventListener('click', function() {
    // Получаем данные из полей ввода
    var inputs = document.querySelectorAll('.popup input[type="text"]');
    var inputData = {};
    inputs.forEach(function(input) {
        inputData[input.placeholder] = input.value;
    });
    
    // Закрываем попап
    popupContainer.style.display = 'none';

    // Выводим данные на странице
    var outputHTML = '<h2>Введите данные:</h2><ul>';
    for (var key in inputData) {
        outputHTML += '<li><strong>' + key + ':</strong> ' + inputData[key] + '</li>';
    }
    outputHTML += '</ul>';
    outputContainer.innerHTML = outputHTML;

    // Создаем JSON из данных
    var jsonData = JSON.stringify(inputData);
    console.log(jsonData);
});

// Добавляем обработчик события для закрытия попапа при клике вне него
window.addEventListener('click', function(event) {
    if (event.target == popupContainer) {
        popupContainer.style.display = 'none';
    }
});
