const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');
//Массив с задачами. Храниться будет в local storage
let tasks = [];
//Проверяем local storage на наличие данных
if (localStorage.getItem('tasks')) {
tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach((task) => renderTask(task));
}
checkEmptyList()
//ДОбавление задачи
form.addEventListener('submit', addTask);
//Удаление задачи
tasksList.addEventListener('click', deleteTask)
//Выполнение задачи
tasksList.addEventListener('click', doneTask)
//Функции 
function addTask(event) {
    event.preventDefault();// отменяем обновление при отправке формы
    let taskText = taskInput.value.trim(); //сохраняем значение что ввели в поле
    if (taskText = '') {
      alert("Введите текст задачи!")
      return;
    }
//Новый обьект для каждой задачи
    const newTask ={
      id: Date.now(), // Время как ID обьекта
      text: taskText, 
      done: false
    };

// Добавляем обьект в массив с задачами 
tasks.push(newTask);
saveToLocalStorage()
renderTask (newTask)
   taskInput.value = "" //очищает поле ввода
   taskInput.focus() // оставляет на поле черту ввода позволяя вводить задачи одна за одной
   checkEmptyList()
   };
function deleteTask(event){
if (event.target.dataset.action !=='delete') return;
 const parenNode = event.target.closest('.list-group-item');
  //Определяем ID задачи 
const id = Number(parenNode.id);
// Находим индекс задачи в массиве
const index = tasks.findIndex((task) => task.id === id);
 // Удаляем задачу из массива
tasks.splice(index, 1);
//Удаляем из разметки 
  parenNode.remove();
  checkEmptyList()
  saveToLocalStorage()
};
function doneTask(event){
if (event.target.dataset.action !== 'done') return
const parenNode = event.target.closest('.list-group-item');
const id = Number(parenNode.id);
const task = tasks.find((task) => task.id === id);
task.done = !task.done
saveToLocalStorage()
const taskTitle = parenNode.querySelector('.task-title');
taskTitle.classList.toggle('task-title--done');
};
function checkEmptyList() {
 if (tasks.length === 0) {
      const emptyListHTML = `
        <li id="emptyList" class="list-group-item empty-list">
          <img src="./img/icon.png" alt="Empty" width="48" class="mt-3">
          <div class="empty-list__title">Список задач пуст</div>
        </li>`;
      tasksList.insertAdjacentHTML('afterbegin', emptyListHTML);
    }
 if (tasks.length > 0) {
const emptyListEl =  document.querySelector('#emptyList');
emptyListEl ? emptyListEl.remove() : null
 }
  }
function saveToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
function renderTask (task) {
  const cssClass = task.done ? "task-title task-title--done" : "task-title";
 const taskHTML = `
                      <li id="${task.id}" class="list-group-item d-flex justify-content-between task-item">
                      <span class="${cssClass}">${task.text}</span>
                      <div class="task-item__buttons">
                          <button type="button" data-action="done" class="btn-action">
                              <img src="./img/tick.svg" alt="Done" width="18" height="18">
                          </button>
                          <button type="button" data-action="delete" class="btn-action">
                              <img src="./img/cross.svg" alt="Done" width="18" height="18">
                          </button>
                      </div>
                  </li>`;
   tasksList.insertAdjacentHTML('beforeend', taskHTML); //Добавляем задачу на страницу
}
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