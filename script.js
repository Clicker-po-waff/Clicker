// Получение количества кликов из localStorage или установка в 0
let counter = localStorage.getItem('waffCounter') ? parseInt(localStorage.getItem('waffCounter')) : 0;
document.getElementById('counter').innerText = counter;

// Функция для обработки кликов
function handleClick() {
    counter++;
    localStorage.setItem('waffCounter', counter);
    document.getElementById('counter').innerText = counter;

    if (counter === 1000000) {
        alert('Нахуя ты нажал на вафф 1 миллион раз?');
    }
}
