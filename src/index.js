import './style.css';
import TaskStatus from './modules/taskStatus.js';
import tasks, { inputAdd, listContainer } from './modules/list.js';

window.onload = tasks.displayList();
TaskStatus.taskComplete();
TaskStatus.clearList();
inputAdd.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    // key code of the keybord key
    event.preventDefault();
    listContainer.innerHTML = '';
    // your code to Run
    tasks.addTask();
    tasks.displayList();
    inputAdd.value = '';
  }
  TaskStatus.taskComplete();
});

// refresh page on clicking the rotate icon
const rotate = document.querySelector('.rotate');
rotate.addEventListener('click', () => {
  window.location.reload();
});
