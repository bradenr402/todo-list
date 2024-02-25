import { Todo, addTodos } from './todo';

export default function createDefaultTodos() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const today = new Date();

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const trashTodo = new Todo({
    title: 'Take out trash',
    dueDate: yesterday,
  });

  const dishesTodo = new Todo({
    title: 'Wash dishes',
    description:
      'Empty dishwasher, load dirty dishes into dishwasher, rerun clean cycle',
  });

  const laundryTodo = new Todo({
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
  addTodos(listOfLists, trashTodo, dishesTodo, laundryTodo, remindersTodo, milkTodo, eggsTodo, breadTodo);

  return {
    listOfLists,
    todos: [trashTodo, dishesTodo, laundryTodo, remindersTodo, milkTodo, eggsTodo, breadTodo],
  };
}
