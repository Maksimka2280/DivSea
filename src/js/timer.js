 // Функция для обновления таймера
 function updateTimer() {
    // Установка начального времени в секундах (8 часов = 28800 секунд)
    let seconds = 28800;

    // Получение элемента, в котором будет отображаться таймер
    let timerElement = document.getElementById('timer');

    // Функция для обновления таймера на странице
    function displayTime() {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        timerElement.textContent = `Осталось времени: ${hours} ч. ${minutes} мин. ${remainingSeconds} сек.`;
    }

    // Функция для уменьшения времени на 1 секунду
    function decrementTime() {
        seconds--;

        // Если время вышло, перезапускаем таймер
        if (seconds < 0) {
            seconds = 28800; // установите желаемое начальное время
        }

        displayTime(); // обновляем отображение времени
    }

    // Интервал для уменьшения времени каждую секунду (1000 миллисекунд)
    let timerInterval = setInterval(decrementTime, 1000);

    // Инициализация отображения времени при загрузке страницы
    displayTime();

    // Опционально: вы можете остановить таймер по клику на элементе таймера
    timerElement.addEventListener('click', function () {
        clearInterval(timerInterval);
    });
}

// Вызов функции для отображения таймера
updateTimer();