import { format, isBefore, isToday } from 'date-fns';
import { updateTabEventListeners } from './tabs';
import { updateTodoEventListeners } from './complete-todos';
import { updateEditTodoButtonEventListeners } from './modals';
import { updateEditTodoFormEventListeners } from './forms';
import { updateDeleteTodoButtonEventListeners } from './delete-todos';
import { Todo } from './todo';
import removeTimeZone from './remove-timezone';
import { updateDeleteListButtonEventListeners } from './delete-list-buttons';

function updatePage(newTodo) {
  const sideLinks = Array.from(document.querySelectorAll('.side-links button'));

  const sideLinksText = sideLinks.map((link) => {
    return link.textContent;
  });

  if (!sideLinksText.includes(newTodo.list)) {
    addNewList(newTodo.list, [newTodo]);
  } else {
    const ul = document.querySelector(
      `ul.${newTodo.list.split(' ').join('_')}`
    );

    if (newTodo.id === Todo.lastId) addNewTodo(newTodo, ul, newTodo.list);
    else editExistingTodo(newTodo);
  }

  updateFormSelectOptions(newTodo.list);
  updateTabEventListeners();
  updateTodoEventListeners();
  updateEditTodoButtonEventListeners();
  updateEditTodoFormEventListeners();
  updateDeleteTodoButtonEventListeners();
  updateDeleteListButtonEventListeners();
}

function updateFormSelectOptions(list) {
  const newTodoForm = document.querySelector('.new-todo-form');

  const select = newTodoForm.querySelector('.list-select');
  const selectOptions = Array.from(
    newTodoForm.querySelectorAll('.list-select option')
  );
  const prevLists = selectOptions.map((opt) => opt.textContent);

  if (!prevLists.includes(list)) {
    const option = document.createElement('option');
    option.value = list;
    option.textContent = list;
    select.appendChild(option);
  }
}

function addNewList(list, allTodos) {
  addNewTab(list);

  const content = document.querySelector('.content');
  const article = document.createElement('article');

  const h2 = document.createElement('h2');
  h2.textContent = list;
  h2.id = `list-${list.split(' ').join('_')}`;
  h2.classList.add('list-title');

  article.classList.add(list.split(' ').join('_'));
  article.appendChild(h2);

  const ul = document.createElement('ul');

  for (const todo of allTodos) {
    addNewTodo(todo, ul, list);
  }

  if (list !== 'Inbox') article.classList.add('hidden');

  article.appendChild(ul);
  content.appendChild(article);
}

function addNewTab(list) {
  const sidebarContainer = document.querySelector('.side-links');
  const tabContainer = document.createElement('div');
  tabContainer.classList.add('tab-container');

  const tabTitleBtn = document.createElement('button');
  tabTitleBtn.textContent = list;
  tabTitleBtn.classList.add('list-btn', 'tab');
  if (list === 'Inbox') tabTitleBtn.classList.add('selected');
  tabTitleBtn.id = list;

  const tabDeleteBtn = document.createElement('btn');


  const span = document.createElement('span');
  span.classList.add('material-icons', 'trash-icon');
  span.textContent = 'delete_outline';



  tabDeleteBtn.appendChild(span);
  tabDeleteBtn.classList.add('list-delete-btn');
  tabDeleteBtn.id = `delete-${list}`;

  tabContainer.append(tabTitleBtn, tabDeleteBtn);
  sidebarContainer.appendChild(tabContainer);
}

function addNewTodo(todo, ul, list) {
  if (todo.list === list) {
    ul.classList.add(`${todo.list.split(' ').join('_')}`);

    const todoItem = document.createElement('li');
    todoItem.id = todo.id;
    todoItem.classList.add('todo');

    const todoMain = document.createElement('div');
    todoMain.classList.add('todo-main');

    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${todo.id}`;
    checkbox.classList.add('checkbox');
    label.htmlFor = checkbox.id;

    label.append(addTodoTitle(todo));

    todoMain.append(checkbox, label, addTodoDate(todo));
    todoItem.append(todoMain, addTodoDescription(todo));

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('todo-btn-container');

    btnContainer.append(addTodoEditButton(todo), addTodoDeleteButton(todo));

    todoItem.append(btnContainer, addTodoId(todo));

    ul.appendChild(todoItem);
  }
}

function editExistingTodo(todo) {
  const todoTitle = document.getElementById(`title-${todo.id}`);
  const todoDate = document.getElementById(`dueDate-${todo.id}`);
  const todoDescription = document.getElementById(`description-${todo.id}`);

  todoTitle.replaceWith(addTodoTitle(todo));
  todoDate.replaceWith(addTodoDate(todo));
  todoDescription.replaceWith(addTodoDescription(todo));
}

function addTodoTitle(todo) {
  const todoTitle = document.createElement('span');
  todoTitle.textContent = todo.title;
  todoTitle.classList.add('todo-title');
  todoTitle.id = `title-${todo.id}`;
  return todoTitle;
}

function addTodoDescription(todo) {
  const todoDescription = document.createElement('p');
  todoDescription.textContent = todo.description ? `${todo.description}` : '';
  todoDescription.id = `description-${todo.id}`;
  todoDescription.classList.add('todo-description');
  return todoDescription;
}

function addTodoDate(todo) {
  const todoDate = document.createElement('span');
  const dateWithoutTimeZone = removeTimeZone(todo.dueDate);
  todoDate.textContent = format(dateWithoutTimeZone, 'M/dd/yyyy');

  if (isToday(dateWithoutTimeZone)) todoDate.classList.add('due-today');
  else if (isBefore(todo.dueDate, new Date()))
    todoDate.classList.add('past-due');
  else todoDate.classList.add('future-due');

  todoDate.classList.add('todo-date');
  todoDate.id = `dueDate-${todo.id}`;

  return todoDate;
}

function addTodoId(todo) {
  const todoId = document.createElement('div');
  todoId.setAttribute('data-id', todo.id);
  todoId.style.display = 'none';
  return todoId;
}

function addTodoEditButton(todo) {
  const todoEditBtn = document.createElement('button');
  todoEditBtn.textContent = 'Edit';
  todoEditBtn.id = `edit-${todo.id}`;
  todoEditBtn.classList.add('edit-todo-btn');
  return todoEditBtn;
}

function addTodoDeleteButton(todo) {
  const todoDeleteBtn = document.createElement('button');
  todoDeleteBtn.textContent = 'Delete';
  todoDeleteBtn.id = `delete-${todo.id}`;
  todoDeleteBtn.classList.add('delete-todo-btn');
  return todoDeleteBtn;
}

export { addNewList, updateFormSelectOptions, updatePage };
