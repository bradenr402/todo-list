import { Todo, addTodos } from './todo';

export default function createDefaultTodos() {
  const pastTodo = new Todo({
    title: 'Past todo',
    dueDate: new Date(2024, 1, 13),
    description: 'This is my post todo description',
  });
  const todayTodo = new Todo({
    title: 'Today todo',
    dueDate: new Date(),
    description: 'This is my today todo description',
  });
  const futureTodo = new Todo({
    title: 'Future todo',
    dueDate: new Date(2024, 1, 23),
    description: 'This is my future todo description',
  });

  const pastTodo2 = new Todo({
    title: 'Past todo',
    dueDate: new Date(2024, 1, 13),
    list: 'To Do',
    description: 'This is my post todo description',
  });
  const todayTodo2 = new Todo({
    title: 'Today todo',
    dueDate: new Date(),
    list: 'To Do',
    description: 'This is my today todo description',
  });
  const futureTodo2 = new Todo({
    title: 'Future todo',
    dueDate: new Date(2024, 1, 23),
    list: 'To Do',
    description: 'This is my future todo description',
  });

  const listOfLists = {};
  addTodos(listOfLists, pastTodo, pastTodo2, todayTodo, todayTodo2, futureTodo, futureTodo2);

  return {listOfLists, todos: [pastTodo, pastTodo2, todayTodo, todayTodo2, futureTodo, futureTodo2]};
}
