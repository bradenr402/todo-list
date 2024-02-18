import './style.css';

import Todo from './todo';
import List from './list';
import { format, isBefore, isToday, isAfter } from 'date-fns';

const myTodo3 = new Todo(
  'Past todo',
  'This is my post todo description',
  new Date(2024, 1, 13)
);
const myTodo = new Todo('Today todo', 'This is my today todo description');
const myTodo2 = new Todo(
  'Future todo',
  'This is my future todo description',
  new Date(2024, 1, 23)
);

const inboxList = new List('Inbox');
inboxList.addTask(myTodo);
inboxList.addTask(myTodo2);
inboxList.addTask(myTodo3);

const todoList = new List('Todo list');
todoList.addTask(myTodo);
todoList.addTask(myTodo2);
todoList.addTask(myTodo3);

const allLists = [inboxList, todoList];

// const h1 = document.createElement('h1');
// h1.textContent = 'Todo List';
// document.body.appendChild(h1);

const article = document.createElement('article');
for (const list of allLists) {
  const section = document.createElement('section');

  const h2 = document.createElement('h2');
  h2.textContent = list.title;
  section.appendChild(h2);

  const ul = document.createElement('ul');

  for (const todo of list.todos) {
    const todoItem = document.createElement('li');
    // todoItem.textContent = todo.title;

    // const todoDescription = document.createElement('p');
    // todoDescription.textContent = `- ${todo.description}`;
    // todoItem.appendChild(todoDescription);

    // const todoDate = document.createElement('p');
    // todoDate.textContent = `Due: ${format(todo.dueDate, 'yyyy-MM-dd')}`;

    // if (isToday(todo.dueDate)) {
    //   todoDate.classList.add('due-today');
    //   todoDate.textContent += ' (Due today)';
    // } else if (isBefore(todo.dueDate, new Date())) {
    //   todoDate.classList.add('past-due');
    //   todoDate.textContent += ' (Past due)';
    // } else if (isAfter(todo.dueDate, new Date())) {
    //   todoDate.classList.add('future-due');
    //   todoDate.textContent += ' (Not due yet)';
    // }

    // todoItem.appendChild(todoDate);

    // const todoPriority = document.createElement('p');
    // todoPriority.textContent = `Priority: ${todo.priority}`;
    // todoItem.appendChild(todoPriority);

    // const todoComplete = document.createElement('p');
    // todoComplete.textContent = `Complete: ${todo.complete ? 'Yes' : 'No'}`;
    // todoItem.appendChild(todoComplete);

    todo.getInfo().split('\n').forEach(info => {
      const p = document.createElement('p');
      p.textContent = info;
      todoItem.appendChild(p);
    });

    ul.appendChild(todoItem);
  }

  section.appendChild(ul);
  article.appendChild(section);
}

document.body.appendChild(article);
