import { getTodoById, deleteTodo } from './todo';
import updateStoredList from './update-stored-list';

function updateDeleteTodoButtonEventListeners() {
  const deleteTodoButtons = Array.from(
    document.querySelectorAll('.delete-todo-btn')
  );

  deleteTodoButtons.forEach((btn) => {
    const todoId = btn.id.split('-')[1];

    const old_btn = document.getElementById(`delete-${todoId}`);
    const new_btn = old_btn.cloneNode(true);
    old_btn.parentNode.replaceChild(new_btn, old_btn);

    new_btn.addEventListener('click', () => {
      const todoItem = document.getElementById(todoId);

      todoItem.remove();
      deleteTodo(getTodoById(todoId));

      updateStoredList();
    });
  });
}

export { updateDeleteTodoButtonEventListeners };
