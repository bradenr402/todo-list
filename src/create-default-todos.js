import { Todo, addTodos } from './todo';

export default function createDefaultTodos() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const today = new Date();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const inboxTodo1 = new Todo({
    title: 'Take out trash',
    dueDate: yesterday,
  });

  const inboxTodo2 = new Todo({
    title: 'Wash dishes',
    description:
      'Empty dishwasher, load dirty dishes into dishwasher, rerun clean cycle',
  });

  const inboxTodo3 = new Todo({
    title: 'Fold laundry',
    dueDate: tomorrow,
  });

  const remindersTodo = new Todo({
    title: 'Reminder',
    dueDate: today,
    list: 'Reminders',
  });

  const milkTodo = new Todo({
    title: 'Milk',
    list: 'Groceries',
  });

  const eggsTodo = new Todo({
    title: 'Eggs',
    list: 'Groceries',
  });

  const breadTodo = new Todo({
    title: 'Bread',
    list: 'Groceries',
  });

  const listOfLists = {};
  addTodos(listOfLists, inboxTodo1, inboxTodo2, inboxTodo3, remindersTodo, milkTodo, eggsTodo, breadTodo);

  return {
    listOfLists,
    todos: [inboxTodo1, inboxTodo2, inboxTodo3, remindersTodo, milkTodo, eggsTodo, breadTodo],
  };
}
