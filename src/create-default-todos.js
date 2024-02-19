import Todo from './todo';
import List from './list';

export default function createDefaultTodos() {
  const allLists = [];
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
  inboxList.addTasks(todayTodo, futureTodo, pastTodo);

  const todoList = new List('Todo list');
  todoList.addTasks(todayTodo, futureTodo, pastTodo);

  allLists.push(inboxList);
  allLists.push(todoList);

  return allLists;
}
