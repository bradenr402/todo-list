import { Todo, addTodos } from './todo';

export default function createDefaultTodos() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const trashTodo = new Todo({
    title: 'Take out trash',
    dueDate: yesterday,
  });

  const dishesTodo = new Todo({
    title: 'Wash dishes',
    description:
      'Empty dishwasher and put away clean dishes\nRinse dishes in sink\nLoad dirty dishes into dishwasher\nRerun clean cycle',
  });

  const laundryTodo = new Todo({
    title: 'Fold laundry',
    description: 'Fold and put away laundry in basket',
    dueDate: tomorrow,
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
  addTodos(listOfLists, trashTodo, dishesTodo, laundryTodo, milkTodo, eggsTodo, breadTodo);

  return {
    listOfLists,
    todos: [trashTodo, dishesTodo, laundryTodo, milkTodo, eggsTodo, breadTodo],
  };
}
