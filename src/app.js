import "./style.css";
import saveTodo from "./modules/saveTodo.js";

const addContent = document.querySelector("#formSection");

// dynamic todo list
const todoListEl = document.querySelector("#todo-list");

export let todos = JSON.parse(localStorage.getItem("todos")) || [];

// renderTodo();
// render todo
function renderTodo() {
  // clear befor a re render
  todoListEl.innerHTML = "";
  todos.forEach((todo, index) => {
    todoListEl.innerHTML += `
    <div class="todo" id=${index}>
     <i 
     class="bi ${todo.checked ? "bi-check-lg" : "bi-circle"}"
      style="color:${todo.color}"
      data-action="check"
      >
      </i> 
     <p class="${todo.checked ? "checked" : ""}" data-action="check">${
      todo.value
    }</p> 
    <i class="bi bi-trash" data-action="delete"></i> 
</div>`;
  });
}
// form submit
addContent.addEventListener("submit", (event) => {
  event.preventDefault();
  // eslint-disable-line no-use-before-define
  saveTodo();
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));
});

// check to do
function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    ...todo,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));
}

// delete to do
function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);

  // re render
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));
}

// click event listener for all todos
todoListEl.addEventListener("click", (event) => {
  const { target } = event;
  const parentElement = target.parentNode;
  if (parentElement.className !== "todo") return;

  // todo id
  const todo = parentElement;
  const todoId = Number(todo.id);

  // target action
  const { action } = target.dataset;

  if (action === "check") {
    checkTodo(todoId);
  }
  if (action === "delete") {
    deleteTodo(todoId);
  }
});

// clear all completed tasks from the lis
const completeSec = document.querySelector(".clear-cont");
completeSec.addEventListener("click", (event) => {
  event.preventDefault();
  const remain = todos.filter((ele) => ele.checked === false);
  remain.forEach((e, i) => {
    e.index = i;
  });
  localStorage.setItem("todos", JSON.stringify(remain));
  window.location.reload();
});

window.addEventListener("load", () => {
  renderTodo();
});
