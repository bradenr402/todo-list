import { format, isBefore, isToday, isAfter } from 'date-fns';
import { updateFormSelectOptions } from './update-page';
import listOfLists from './index';

function setupPage(allTodos) {
  const allLists = Object.keys(listOfLists);

  const sidebarContainer = document.querySelector('.side-links');

  const content = document.querySelector('.content');
  for (const list of allLists) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = list;
    h3.classList.add('list-title');
    li.appendChild(h3);
    sidebarContainer.appendChild(li);

    addNewList(list, allTodos, content);
  }

  const main = document.querySelector('body main');
  main.appendChild(content);

  allTodos.forEach((todo) => {
    updateFormSelectOptions(todo);
  });
}

function addNewList(list, allTodos, content) {
  const details = document.createElement('details');
  const summary = document.createElement('summary');

  const h2 = document.createElement('h2');
  h2.textContent = list;
  h2.classList.add('list-title');
  summary.appendChild(h2);
  details.appendChild(summary);

  const ul = document.createElement('ul');

  for (const todo of allTodos) {
    addNewTodo(todo, ul, list);
  }

  details.appendChild(ul);
  content.appendChild(details);
}

function addNewTodo(todo, ul, list) {
  if (todo.list === list) {
    ul.classList.add(`${todo.list.split(' ').join('')}`);
    const todoItem = document.createElement('li');

    todoItem.appendChild(addTodoTitle(todo));
    todoItem.appendChild(addTodoDescription(todo));
    todoItem.appendChild(addTodoDate(todo));
    todoItem.appendChild(addTodoCompleted(todo));

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

export { addNewList, addNewTodo, setupPage };
