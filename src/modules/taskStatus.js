export const tasksItems = JSON.parse(localStorage.getItem('lion')) || [];

class TaskStatus {
  // check task status if its completed or not
  static taskComplete = () => {
    const checkbox = document.querySelectorAll('.checkbox');
    checkbox.forEach((ele, i) => {
      ele.addEventListener('change', () => {
        if (tasksItems[i].complete === true) {
          tasksItems[i].complete = false;
          ele.nextElementSibling.classList.remove('checkboxActive');
          localStorage.setItem('lion', JSON.stringify(tasksItems));
        } else {
          tasksItems[i].complete = true;
          ele.nextElementSibling.classList.add('checkboxActive');
          localStorage.setItem('lion', JSON.stringify(tasksItems));
        }
      });
    });
  };

  // clear all completed tasks from the list
  static clearList = () => {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', (event) => {
      event.preventDefault();
      const remain = tasksItems.filter((ele) => ele.complete === false);
      remain.forEach((e, i) => {
        e.index = i;
      });
      localStorage.setItem('lion', JSON.stringify(remain));
      window.location.reload();
    });
  };
}
export default TaskStatus;
