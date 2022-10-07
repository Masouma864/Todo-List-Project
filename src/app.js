import './style.css';
const addContent = document.querySelector("#formSection");
const todoInput = document.querySelector("#newTodo");
const notificationEl = document.querySelector(".notification");

let todos = JSON.parse(localStorage.getItem('todos')) || [];
window.addEventListener('load',()=>{
    renderTodo();
})
//renderTodo();
//form submit
addContent.addEventListener("submit", function (event) {
  event.preventDefault();
  saveTodo();
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));
});

//save todo
function saveTodo() {
  const todoValue = todoInput.value;

  //check if todo id empty
  const isEmpty = todoValue === "";
  //check if duplicat
  const isDuplicate = todos.some(
    (todo) => todo.value.toUpperCase() === todoValue.toUpperCase()
  );

  if (isEmpty) {
    alert("input a todo");
  } else if (isDuplicate) {
    alert("Todo Already Exist");
  } else {
    const todo = {
      value: todoValue,
      checked: false,
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    };
    todos.push(todo);
    todoInput.value = "";
    console.log(todos);
  }
}

//dynamic todo list
const todoListEl = document.querySelector("#todo-list");

//render todo
function renderTodo() {
  //clear befor a re render
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
//click event listener for all todos
todoListEl.addEventListener("click", (event) => {
  const target = event.target;
  const parentElement = target.parentNode;
  if (parentElement.className !== "todo") return;

  //todo id
  const todo = parentElement;
  const todoId = Number(todo.id);

  //target action
  const action = target.dataset.action;

  action === "check" && checkTodo(todoId);
  action === "delete" && deleteTodo(todoId);
});
//check to do
function checkTodo(todoId) {
  todos = todos.map((todo, index) => ({
    ...todo,
    checked: index === todoId ? !todo.checked : todo.checked,
  }));
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));
}

//delete to do
function deleteTodo(todoId) {
  todos = todos.filter((todo, index) => index !== todoId);

  //re render
  renderTodo();
  localStorage.setItem("todos", JSON.stringify(todos));
}
