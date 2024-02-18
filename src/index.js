import './style.css';
// import Icon from './icon.png';
  // const myIcon = new Image();
  // myIcon.src = Icon;

import Todo from './todo';
import List from './list';

const myTodo = new Todo('Title', 'This is my todo description');
const myTodo2 = new Todo('Title 2', 'This is my todo 2 description');
const myTodo3 = new Todo('Title 3', 'This is my todo 3 description');
console.log(myTodo.getInfo());

const myList = new List('Inbox');
myList.addTask(myTodo);
myList.addTask(myTodo2);
myList.addTask(myTodo3);
console.log(myList.getTodos());

const h1 = document.createElement('h1');
h1.textContent = 'Todo';
document.body.appendChild(h1);

const section = document.createElement('section');
const list = document.createElement('ul');
for (const todo of myList.todos) {
  const todoItem = document.createElement('li');
  const todoDescription = document.createElement('span');
  todoItem.textContent = todo.title;
  todoDescription.textContent = ` - ${todo.description}`;
  todoDescription.classList.add('description');
  todoItem.appendChild(todoDescription);
  todoItem.classList.add('todo');
  list.appendChild(todoItem);
}
section.appendChild(list);
document.body.appendChild(section);
