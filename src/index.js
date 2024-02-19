import { format, isBefore, isToday, isAfter } from 'date-fns';
import './style.css';
import createDefaultTodos from './create-default-todos';
import './modals';

const allLists = createDefaultTodos();

const sideBarContainer = document.querySelector('.side-links');
for (const list of allLists) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = list.title;
  li.appendChild(span);
  sideBarContainer.appendChild(li);
}

const content = document.querySelector('.content');
for (const list of allLists) {
  const details = document.createElement('details');
  const summary = document.createElement('summary');

  const h2 = document.createElement('h2');
  h2.textContent = list.title;
  h2.classList.add('list-title');
  summary.appendChild(h2);
  details.appendChild(summary);

  const ul = document.createElement('ul');

  for (const todo of list.todos) {
    const todoItem = document.createElement('li');

    const todoTitle = document.createElement('span');
    todoTitle.textContent = todo.title;
    todoTitle.classList.add('text-bold');
    todoTitle.classList.add('text-lg');
    todoItem.appendChild(todoTitle);

    const todoDescription = document.createElement('p');
    todoDescription.textContent = `- ${todo.description}`;
    todoItem.appendChild(todoDescription);

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

    todoItem.appendChild(todoDate);

    const todoPriority = document.createElement('p');
    todoPriority.textContent = `- Priority: ${todo.priority}`;
    todoItem.appendChild(todoPriority);

    const todoCompleted = document.createElement('p');
    todoCompleted.textContent = `- Completed: ${todo.completed ? 'Yes' : 'No'}`;
    todoItem.appendChild(todoCompleted);

    ul.appendChild(todoItem);
  }

  details.appendChild(ul);
  content.appendChild(details);
}

const main = document.querySelector('body main');
main.appendChild(content);

