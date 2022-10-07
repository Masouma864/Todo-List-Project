(self["webpackChunktodo_list_project"] = self["webpackChunktodo_list_project"] || []).push([["index"],{

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

const addContent = document.querySelector("#formSection");
const todoInput = document.querySelector("#newTodo");
const notificationEl = document.querySelector(".notification");

let todos = JSON.parse(localStorage.getItem('todos')) || [];

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsTUFBTTtBQUNqQztBQUNBLGlCQUFpQiwyQ0FBMkM7QUFDNUQscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDhCQUE4QjtBQUMvQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LXByb2plY3QvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1TZWN0aW9uXCIpO1xyXG5jb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld1RvZG9cIik7XHJcbmNvbnN0IG5vdGlmaWNhdGlvbkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3RpZmljYXRpb25cIik7XHJcblxyXG5sZXQgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB8fCBbXTtcclxuXHJcbi8vcmVuZGVyVG9kbygpO1xyXG5cclxuLy9mb3JtIHN1Ym1pdFxyXG5hZGRDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBzYXZlVG9kbygpO1xyXG4gIHJlbmRlclRvZG8oKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbn0pO1xyXG5cclxuLy9zYXZlIHRvZG9cclxuZnVuY3Rpb24gc2F2ZVRvZG8oKSB7XHJcbiAgY29uc3QgdG9kb1ZhbHVlID0gdG9kb0lucHV0LnZhbHVlO1xyXG5cclxuICAvL2NoZWNrIGlmIHRvZG8gaWQgZW1wdHlcclxuICBjb25zdCBpc0VtcHR5ID0gdG9kb1ZhbHVlID09PSBcIlwiO1xyXG4gIC8vY2hlY2sgaWYgZHVwbGljYXRcclxuICBjb25zdCBpc0R1cGxpY2F0ZSA9IHRvZG9zLnNvbWUoXHJcbiAgICAodG9kbykgPT4gdG9kby52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0b2RvVmFsdWUudG9VcHBlckNhc2UoKVxyXG4gICk7XHJcblxyXG4gIGlmIChpc0VtcHR5KSB7XHJcbiAgICBhbGVydChcImlucHV0IGEgdG9kb1wiKTtcclxuICB9IGVsc2UgaWYgKGlzRHVwbGljYXRlKSB7XHJcbiAgICBhbGVydChcIlRvZG8gQWxyZWFkeSBFeGlzdFwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgdG9kbyA9IHtcclxuICAgICAgdmFsdWU6IHRvZG9WYWx1ZSxcclxuICAgICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICAgIGNvbG9yOiBcIiNcIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE2Nzc3MjE1KS50b1N0cmluZygxNiksXHJcbiAgICB9O1xyXG4gICAgdG9kb3MucHVzaCh0b2RvKTtcclxuICAgIHRvZG9JbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBjb25zb2xlLmxvZyh0b2Rvcyk7XHJcbiAgfVxyXG59XHJcblxyXG4vL2R5bmFtaWMgdG9kbyBsaXN0XHJcbmNvbnN0IHRvZG9MaXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8tbGlzdFwiKTtcclxuXHJcbi8vcmVuZGVyIHRvZG9cclxuZnVuY3Rpb24gcmVuZGVyVG9kbygpIHtcclxuICAvL2NsZWFyIGJlZm9yIGEgcmUgcmVuZGVyXHJcbiAgdG9kb0xpc3RFbC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XHJcbiAgICB0b2RvTGlzdEVsLmlubmVySFRNTCArPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidG9kb1wiIGlkPSR7aW5kZXh9PlxyXG4gICAgIDxpIFxyXG4gICAgIGNsYXNzPVwiYmkgJHt0b2RvLmNoZWNrZWQgPyBcImJpLWNoZWNrLWxnXCIgOiBcImJpLWNpcmNsZVwifVwiXHJcbiAgICAgIHN0eWxlPVwiY29sb3I6JHt0b2RvLmNvbG9yfVwiXHJcbiAgICAgIGRhdGEtYWN0aW9uPVwiY2hlY2tcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvaT4gXHJcbiAgICAgPHAgY2xhc3M9XCIke3RvZG8uY2hlY2tlZCA/IFwiY2hlY2tlZFwiIDogXCJcIn1cIiBkYXRhLWFjdGlvbj1cImNoZWNrXCI+JHtcclxuICAgICAgdG9kby52YWx1ZVxyXG4gICAgfTwvcD4gXHJcbiAgICA8aSBjbGFzcz1cImJpIGJpLXRyYXNoXCIgZGF0YS1hY3Rpb249XCJkZWxldGVcIj48L2k+IFxyXG48L2Rpdj5gO1xyXG4gIH0pO1xyXG59XHJcbi8vY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIGFsbCB0b2Rvc1xyXG50b2RvTGlzdEVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgY29uc3QgcGFyZW50RWxlbWVudCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG4gIGlmIChwYXJlbnRFbGVtZW50LmNsYXNzTmFtZSAhPT0gXCJ0b2RvXCIpIHJldHVybjtcclxuXHJcbiAgLy90b2RvIGlkXHJcbiAgY29uc3QgdG9kbyA9IHBhcmVudEVsZW1lbnQ7XHJcbiAgY29uc3QgdG9kb0lkID0gTnVtYmVyKHRvZG8uaWQpO1xyXG5cclxuICAvL3RhcmdldCBhY3Rpb25cclxuICBjb25zdCBhY3Rpb24gPSB0YXJnZXQuZGF0YXNldC5hY3Rpb247XHJcblxyXG4gIGFjdGlvbiA9PT0gXCJjaGVja1wiICYmIGNoZWNrVG9kbyh0b2RvSWQpO1xyXG4gIGFjdGlvbiA9PT0gXCJkZWxldGVcIiAmJiBkZWxldGVUb2RvKHRvZG9JZCk7XHJcbn0pO1xyXG4vL2NoZWNrIHRvIGRvXHJcbmZ1bmN0aW9uIGNoZWNrVG9kbyh0b2RvSWQpIHtcclxuICB0b2RvcyA9IHRvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+ICh7XHJcbiAgICAuLi50b2RvLFxyXG4gICAgY2hlY2tlZDogaW5kZXggPT09IHRvZG9JZCA/ICF0b2RvLmNoZWNrZWQgOiB0b2RvLmNoZWNrZWQsXHJcbiAgfSkpO1xyXG4gIHJlbmRlclRvZG8oKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbn1cclxuXHJcbi8vZGVsZXRlIHRvIGRvXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kb0lkKSB7XHJcbiAgdG9kb3MgPSB0b2Rvcy5maWx0ZXIoKHRvZG8sIGluZGV4KSA9PiBpbmRleCAhPT0gdG9kb0lkKTtcclxuXHJcbiAgLy9yZSByZW5kZXJcclxuICByZW5kZXJUb2RvKCk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==