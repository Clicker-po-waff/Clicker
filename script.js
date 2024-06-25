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
    waffImage.src = "images/waff.gif";
    
    // Вернуть статичное изображение после завершения анимации (например, через 2 секунды)
    setTimeout(() => {
        waffImage.src = "images/waff_static.png";
    }, 1000); // Настройте время в соответствии с длительностью вашего GIF

    if (counter === 1000000) {
        alert('Тебе было скучно и ты погладил вафф 1 миллион раз? Уф сигма'');
    }
}
