import Todo from './todo';
import updatePage from './update-page';

const newDialog = document.querySelector('.modal.new-todo');
const newTodoForm = document.querySelector('.new-todo-form');

newTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const dueDate = document.getElementById('dueDate').value;
  const description = document.getElementById('description').value;

  const listValue = document.getElementById('list').value;
  const newListValue = document.getElementById('newList').value;

  const list = listValue ? listValue : newListValue;

  const newTodo = new Todo({ title, dueDate, list, description });
  console.log('within event listener: ', newTodo);

  updatePage(newTodo);

  newTodoForm.reset(); // clears form
  newDialog.close(); // closes modal
});
