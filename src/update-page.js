import { format, isBefore, isToday } from 'date-fns';
import { updateTabEventListeners } from './tabs';
import { updateTodoEventListeners } from './complete-todos';
import { updateEditTodoButtonEventListeners } from './modals';
import { updateEditTodoFormEventListeners } from './forms';
import { updateDeleteTodoButtonEventListeners } from './delete-todos';
import { Todo } from './todo';
import removeTimeZone from './remove-timezone';

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
}

function updateFormSelectOptions(list) {
  const forms = [
    document.querySelector('.new-todo-form'),
    document.querySelector('.edit-todo-form'),
  ];

  forms.forEach((form) => {
    const select = form.querySelector('.list-select');
    const selectOptions = Array.from(
      form.querySelectorAll('.list-select option')
    );
    const prevLists = selectOptions.map((opt) => opt.textContent);

    if (!prevLists.includes(list)) {
      const option = document.createElement('option');
      option.value = list;
      option.textContent = list;
      select.appendChild(option);
    }
  });
}

function addNewList(list, allTodos) {
  addNewTab(list);

  const content = document.querySelector('.content');
  const article = document.createElement('article');

  const h2 = document.createElement('h2');
  h2.textContent = list;
  h2.id = `list-${list.split(' ').join('_')}`;

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

  const btn = document.createElement('button');
  btn.textContent = list;
  btn.classList.add('list-btn', 'tab');
  if (list === 'Inbox') btn.classList.add('selected');

  btn.id = list;

  sidebarContainer.appendChild(btn);
}

function addNewTodo(todo, ul, list) {
  if (todo.list === list) {
    ul.classList.add(`${todo.list.split(' ').join('_')}`);
    const todoItem = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.id = `checkbox-${todo.id}`;
    label.htmlFor = checkbox.id;

    todoItem.id = todo.id;
    todoItem.classList.add('todo');

    const separator = document.createElement('span');
    separator.textContent = ': ';

    label.appendChild(addTodoTitle(todo));
    label.appendChild(separator);
    label.appendChild(addTodoDate(todo));
    label.appendChild(addTodoDescription(todo));

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    todoItem.appendChild(addTodoEditButton(todo));
    todoItem.appendChild(addTodoDeleteButton(todo));
    todoItem.appendChild(addTodoId(todo));
    ul.appendChild(todoItem);
  }
}

function editExistingTodo(todo) {
  const todoTitle = document.getElementById(`title-${todo.id}`);
  const todoDate = document.getElementById(`dueDate-${todo.id}`);
  const todoDescription = document.getElementById(`description-${todo.id}`);

  todoTitle.replaceChildren(addTodoTitle(todo));
  todoDate.replaceChildren(addTodoDate(todo));
  todoDescription.replaceChildren(addTodoDescription(todo));
}

function addTodoTitle(todo) {
  const todoTitle = document.createElement('span');
  todoTitle.textContent = todo.title;
  todoTitle.classList.add('text-bold', 'text-lg');
  todoTitle.id = `title-${todo.id}`;
  return todoTitle;
}

function addTodoDescription(todo) {
  const todoDescription = document.createElement('p');
  todoDescription.textContent = todo.description ? `${todo.description}` : '';
  todoDescription.id = `description-${todo.id}`;
  return todoDescription;
}

function addTodoDate(todo) {
  const todoDate = document.createElement('span');
  const dateWithoutTimeZone = removeTimeZone(todo.dueDate);
  todoDate.textContent = format(dateWithoutTimeZone, 'yyyy-MM-dd');

  if (isToday(dateWithoutTimeZone)) todoDate.classList.add('due-today');
  else if (isBefore(todo.dueDate, new Date()))
    todoDate.classList.add('past-due');
  else todoDate.classList.add('future-due');

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
