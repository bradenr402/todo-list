import { Todo, addTodos, getTodoById } from './todo';
import { updateFormSelectOptions, updatePage } from './update-page';
import { listOfLists } from './index';
import { tabChange } from './tabs';

const newDialog = document.querySelector('.modal.new-todo');
const newTodoForm = document.querySelector('.new-todo-form');

newTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('newTitle').value;
  const dueDate = document.getElementById('newDueDate').value;
  const description = document.getElementById('newDescription').value;

  const listValue = document.getElementById('newList').value;
  const newListValue = document.getElementById('newCreateList').value;

  let list = listValue || newListValue;

  const newTodo = new Todo({ title, dueDate, list, description });
  addTodos(listOfLists, newTodo);

  updatePage(newTodo);

  newTodoForm.reset(); // clears form
  newDialog.close(); // closes modal
});

const editDialog = document.querySelector('.modal.edit-todo');
const editTodoForm = document.querySelector('.edit-todo-form');

editTodoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const editedTitle = document.getElementById('editTitle').value;
  const editedDueDate = document.getElementById('editDueDate').value;
  const editedDescription = document.getElementById('editDescription').value;

  const hiddenIdValue = document.getElementById('hiddenId').value;
  const editTodo = getTodoById(hiddenIdValue);

  editTodo.title = editedTitle;
  editTodo.dueDate = editedDueDate;
  editTodo.description = editedDescription;

  updatePage(editTodo);

  editTodoForm.reset();
  editDialog.close();
});

const listDialog = document.querySelector('.modal.edit-list');
const editListForm = document.querySelector('.edit-list-form');

editListForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const editedTitle = document.getElementById('listTitle').value;

  const tab = document.querySelector('.selected');
  const prevTitle = tab.textContent;
  tab.textContent = editedTitle;
  tab.id = editedTitle;

  const editBtn = document.getElementById(`edit-${prevTitle}`);
  editBtn.id = `edit-${editedTitle}`;

  const deleteBtn = document.getElementById(`delete-${prevTitle}`);
  deleteBtn.id = `delete-${editedTitle}`;

  const listHeading = document.getElementById(`list-${prevTitle}`);
  listHeading.textContent = editedTitle;
  listHeading.id = `list-${editedTitle}`;

  const listArticle = document.querySelector(
    `article.${prevTitle.split(' ').join('_')}`
  );
  listArticle.classList.remove(prevTitle.split(' ').join('_'));
  listArticle.classList.add(editedTitle.split(' ').join('_'));

  const listUl = document.querySelector(`ul.${prevTitle}`);
  listUl.classList.remove(prevTitle.split(' ').join('_'));
  listUl.classList.add(editedTitle.split(' ').join('_'));

  listOfLists[editedTitle] = listOfLists[prevTitle];
  delete listOfLists[prevTitle];

  for (const todo of listOfLists[editedTitle]) {
    todo.list = editedTitle;
  }

  tabChange(editedTitle);
  const selectOption = newTodoForm.querySelector(
    `.list-select option[value="${prevTitle}"]`
  );
  selectOption.textContent = editedTitle;
  selectOption.value = editedTitle;

  editListForm.reset();
  listDialog.close();
});
