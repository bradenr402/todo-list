import { Todo, addTodos, getTodoById } from './todo';
import { updatePage } from './update-page';
import listOfLists from './index';

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
  addTodos(listOfLists, newTodo);

  updatePage(newTodo);

  newTodoForm.reset(); // clears form
  newDialog.close(); // closes modal
});

const handleSubmit = (event) => {
  event.preventDefault();

  const editedTitle = document.getElementById('editTitle').value;
  const editedDueDate = document.getElementById('editDueDate').value;
  const editedDescription = document.getElementById('editDescription').value;

  const listValue = document.getElementById('editList').value;
  const newListValue = document.getElementById('editCreateList').value;

  let editedList = listValue || newListValue || 'Inbox';

  const hiddenIdValue = document.getElementById('hiddenId').value;
  const editTodo = getTodoById(hiddenIdValue);

  editTodo.title = editedTitle;
  editTodo.dueDate = editedDueDate;
  editTodo.description = editedDescription;
  editTodo.list = editedList;

  updatePage(editTodo);
};

function updateEditTodoFormEventListeners() {

  const editDialog = document.querySelector('.modal.edit-todo');
  const editTodoForm = document.querySelector('.edit-todo-form');

  // Remove the existing event listener
  editTodoForm.removeEventListener('submit', handleSubmit);

  // Add the new event listener
  editTodoForm.addEventListener('submit', handleSubmit);

  editTodoForm.reset();
  editDialog.close();
}

export { updateEditTodoFormEventListeners };
