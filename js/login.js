const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Отправка данных на сервер
    const response = await fetch('https://your-server-address.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (response.ok) {
        // Успешная авторизация
        alert('Успешный вход!');
        window.location.href = 'index.html'; // Перенаправление на основную страницу
    } else {
        // Ошибка авторизации
        loginMessage.textContent = result.message || 'Ошибка входа';
    }
});

 //Снежинки 
// Количество снежинок
const snowflakeCount = 1;
// Контейнер для снежинок
const container = document.getElementById('snow-container');
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  
  // Добавляем случайный символ снежинки (❄, ❅, ❆)
  snowflake.textContent = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];

  // Случайный размер снежинки
  const size = Math.random() * 10 + 5 + 'px';
  snowflake.style.fontSize = size;

  // Случайное начальное положение
  snowflake.style.left = Math.random() * 100 + '%';

  // Случайная продолжительность падения
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';

  // Добавляем снежинку в контейнер
  container.appendChild(snowflake);
 
  // Удаляем снежинку после окончания анимации
  snowflake.addEventListener('animationend', () => {
    snowflake.remove();
  });
}
// Генерация снежинок
setInterval(createSnowflake, 500);