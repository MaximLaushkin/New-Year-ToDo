document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения полей
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const passwordError = document.getElementById('passwordError');
    const password2 = document.getElementById('password2').value.trim();
    const passwordError2 = document.getElementById('passwordError2');

    // Очищаем сообщение об ошибке
    passwordError.textContent = '';

    // Проверяем длину пароля
    if (password.length < 6) {
        passwordError.textContent = 'Пароль должен быть не меньше 6 символов';
        return;
    } 
    if (password2 != password) {
        passwordError2.textContent = 'Пароли не совпадают'
        return;
    }
    
    // Если все проверки пройдены, выводим сообщение
    alert(`Пользователь ${username} успешно зарегистрирован!`);

    // Дополнительно: Отправка данных на сервер
    const data = { username, email, password };

    fetch('https://your-server-address.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((result) => {
            if (result.success) {
                alert('Регистрация успешна!');
                window.location.href = 'login.html'; // Переход на страницу входа
            } else {
                alert(result.message || 'Ошибка регистрации');
            }
        })
        .catch((error) => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при регистрации.');
        });
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