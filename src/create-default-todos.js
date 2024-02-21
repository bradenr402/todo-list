import { Todo, addTodos } from './todo';

export default function createDefaultTodos() {
  const inboxTodo1 = new Todo({
    title: 'Take out trash',
    dueDate: new Date(2024, 1, 22),
  });

  const inboxTodo2 = new Todo({
    title: 'Wash dishes',
    dueDate: new Date(2024, 1, 21, 17, 0, 0),
    description:
      'Empty dishwasher, load dirty dishes into dishwasher, rerun clean cycle',
  });

  const listOfLists = {};
  addTodos(listOfLists, inboxTodo1, inboxTodo2);

  return { listOfLists, todos: [inboxTodo1, inboxTodo2] };
}
