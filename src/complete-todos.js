import listOfLists from './index';
import { getTodoById } from './todo';

function updateTodoEventListeners() {
  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => {
    const todoId = todo.id;
    const checkbox = document.getElementById(`checkbox-${todoId}`);

    const todoObject = getTodoById(listOfLists, todo.id);
    checkbox.addEventListener('change', function () {
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
