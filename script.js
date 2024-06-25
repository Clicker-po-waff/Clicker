// Получение количества кликов из localStorage или установка в 0
let counter = localStorage.getItem('waffCounter') ? parseInt(localStorage.getItem('waffCounter')) : 0;
document.getElementById('counter').innerText = counter;

// Переменные для анимации
const totalFrames = 5; // Общее количество кадров
let currentFrame = 0;
const frameDuration = 200; // Длительность каждого кадра в миллисекундах (0.5 секунды)

// Функция для обработки кликов
function handleClick() {
    counter++;
    localStorage.setItem('waffCounter', counter);
    document.getElementById('counter').innerText = counter;

    // Запуск анимации спрайта
    currentFrame = 0;
    animateSprite();

    if (counter === 1000000) {
        alert('Тебе было скучно и ты погладил вафф 1 миллион раз? Уф сигма');
    }
}

// Функция для анимации спрайта
function animateSprite() {
    const waffImage = document.getElementById('waff');
    const interval = setInterval(() => {
        if (currentFrame >= totalFrames) {
            clearInterval(interval);
            waffImage.src = `sprites/waff1.png`; // Возвращаемся к первому кадру
        } else {
            waffImage.src = `sprites/waff${currentFrame + 1}.png`;
            currentFrame++;
        }
    }, frameDuration); // Настройте скорость анимации
}
