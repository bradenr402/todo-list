import Todo from './todo';
import { updateFormSelectOptions, updatePage } from './update-page';

const newDialog = document.querySelector('.modal.new-todo');
const newTodoForm = document.querySelector('.new-todo-form');

newTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('newTitle').value;
  const dueDate = document.getElementById('newDueDate').value;
  const description = document.getElementById('newDescription').value;

  const listValue = document.getElementById('newList').value;
  const newListValue = document.getElementById('newCreateList').value;

  let list = listValue || newListValue || 'Inbox';

  const newTodo = new Todo({ title, dueDate, list, description });

  updatePage(newTodo);
  updateFormSelectOptions(newTodo);

  newTodoForm.reset(); // clears form
  newDialog.close(); // closes modal
});
