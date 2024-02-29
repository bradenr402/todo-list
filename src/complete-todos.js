import { getTodoById } from './todo';
import updateStoredList from './update-stored-list';

function updateTodoEventListeners() {
  const todos = Array.from(document.querySelectorAll('.todo'));
  todos.forEach((todo) => {
    const todoId = todo.id;

    const old_checkbox = document.getElementById(`checkbox-${todoId}`);
    const new_checkbox = old_checkbox.cloneNode(true);
    old_checkbox.parentNode.replaceChild(new_checkbox, old_checkbox);

    new_checkbox.addEventListener('change', function () {
      const todoMain = todo.querySelector('.todo-title');
      const todoObject = getTodoById(todoId);
      if (this.checked) {
        todoMain.classList.add('line-through');
        todoObject.markCompleted();
      } else {
        todoMain.classList.remove('line-through');
        todoObject.markUncompleted();
      }

      updateStoredList();
    });
  });
}

export { updateTodoEventListeners };
