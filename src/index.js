import './style.css';

const taskLists = [
  {
    description: 'Cook dinner',
    completed: false,
    index: 2,
  },
  {
    description: 'House chores',
    completed: false,
    index: 0,
  },

  {
    description: 'get hair done',
    completed: true,
    index: 1,
  },

];
const todoContainer = document.querySelector('.todo-container');
const ul = document.createElement('ul');

const displayTasks = (tasks) => {
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task) => {
    ul.innerHTML
    += `
    <li class="task-item">
        <div>
            <input type="checkbox" id=${task.index} name=${task.index} value=${task.description} class="task-checkbox">
            <label for="vehicle1"> ${task.description}</label>
        </div>
       <i class="fas fa-ellipsis-v"></i>
    </li>
   `;
  });
  todoContainer.appendChild(ul);
};

displayTasks(taskLists);