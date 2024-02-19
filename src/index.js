import './style.css';
import Todo from './todo';
import List from './list';
import { format, isBefore, isToday, isAfter } from 'date-fns';

const pastTodo = new Todo(
  'Past todo',
  'This is my post todo description',
  new Date(2024, 1, 13),
  'medium'
);
const todayTodo = new Todo('Today todo', 'This is my today todo description');
const futureTodo = new Todo(
  'Future todo',
  'This is my future todo description',
  new Date(2024, 1, 23),
  'high'
);

const inboxList = new List('Inbox');
inboxList.addTask(todayTodo);
inboxList.addTask(futureTodo);
inboxList.addTask(pastTodo);

const todoList = new List('Todo list');
todoList.addTask(todayTodo);
todoList.addTask(futureTodo);
todoList.addTask(pastTodo);

const allLists = [inboxList, todoList];

const article = document.createElement('article');
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

    const todoComplete = document.createElement('p');
    todoComplete.textContent = `- Complete: ${todo.complete ? 'Yes' : 'No'}`;
    todoItem.appendChild(todoComplete);

    ul.appendChild(todoItem);
  }

  details.appendChild(ul);
  article.appendChild(details);
}

document.body.appendChild(article);
