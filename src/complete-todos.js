import listOfLists from './index';
import { getTodoById } from './todo';

function updateTodoEventListeners() {
  const todos = Array.from(document.querySelectorAll('.todo'));
  todos.forEach((todo) => {
    const todoId = todo.id;

    const old_checkbox = document.getElementById(`checkbox-${todoId}`);
    const new_checkbox = old_checkbox.cloneNode(true);
    old_checkbox.parentNode.replaceChild(new_checkbox, old_checkbox);

    new_checkbox.addEventListener('change', function () {
      const todoObject = getTodoById(todoId);
      if (this.checked) {
        todo.style.textDecoration = 'line-through';
        todoObject.markCompleted();
      } else {
        todo.style.textDecoration = 'none';
        todoObject.markUncompleted();
      }
    });
  });
}

export { updateTodoEventListeners };
