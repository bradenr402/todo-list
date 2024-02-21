import { format, isBefore, isToday, isAfter } from 'date-fns';
import { updateTabEventListeners } from './tabs';
import { updateTodoEventListeners } from './complete-todos';

function updatePage(newTodo) {
  const sideLinks = Array.from(document.querySelectorAll('.side-links li h3'));

  const sideLinksText = sideLinks.map((link) => {
    return link.textContent;
  });

  if (!sideLinksText.includes(newTodo.list)) {
    addNewList(newTodo.list, [newTodo]);
  } else {
    const ul = document.querySelector(
      `ul.${newTodo.list.split(' ').join('_')}`
    );
    addNewTodo(newTodo, ul, newTodo.list);
  }

  updateTabEventListeners();
  updateTodoEventListeners();
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

    label.appendChild(addTodoTitle(todo));
    if (todo.description) label.appendChild(addTodoDescription(todo));
    label.appendChild(addTodoDate(todo));

    todoItem.appendChild(checkbox);
    todoItem.appendChild(label);
    ul.appendChild(todoItem);
  }
}

function addTodoTitle(todo) {
  const todoTitle = document.createElement('span');
  todoTitle.textContent = todo.title;
  todoTitle.classList.add('text-bold', 'text-lg');
  return todoTitle;
}

function addTodoDescription(todo) {
  const todoDescription = document.createElement('p');
  todoDescription.textContent = `- ${todo.description}`;
  return todoDescription;
}

function addTodoDate(todo) {
  const todoDate = document.createElement('p');
  todoDate.textContent = `- Due: ${format(todo.dueDate, 'yyyy-MM-dd')}`;

  if (isToday(todo.dueDate)) {
    todoDate.classList.add('due-today');
    todoDate.textContent += ' (Due today)';
  } else if (isBefore(todo.dueDate, new Date())) {
    todoDate.classList.add('past-due');
    todoDate.textContent += ' (Past due)';
  } else if (isAfter(todo.dueDate, new Date())) {
    todoDate.classList.add('future-due');
    todoDate.textContent += ' (Not due yet)';
  }

  return todoDate;
}

function addTodoCompleted(todo) {
  const todoCompleted = document.createElement('p');
  todoCompleted.textContent = `- Completed: ${todo.completed ? 'Yes' : 'No'}`;
  return todoCompleted;
}

export { addNewList, updateFormSelectOptions, updatePage };
