// Получение количества кликов из localStorage или установка в 0
let counter = localStorage.getItem('waffCounter') ? parseInt(localStorage.getItem('waffCounter')) : 0;
document.getElementById('counter').innerText = counter;

// Функция для обработки кликов
function handleClick() {
    counter++;
    localStorage.setItem('waffCounter', counter);
    document.getElementById('counter').innerText = counter;

    // Запуск анимации GIF
    let waffImage = document.getElementById('waff');
    waffImage.src = ""; // Сброс GIF для перезапуска анимации
    setTimeout(() => {
        waffImage.src = "images/waff.gif";
    }, 10);

    if (counter === 1000000) {
        alert('Тебе было скучно и ты погладил вафф 1 миллион раз? Уф сигма');
    }
}
