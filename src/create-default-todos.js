import { Todo, addTodos } from './todo';

export default function createDefaultTodos() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todo1 = new Todo({
    title: 'Click the checkbox or the title on a todo to mark it as complete',
    description: 'Click it again to mark it as incomplete',
    list: 'Getting Started',
  });

  const todo2 = new Todo({
    title: 'Click the edit (pencil) icon on a todo to edit it',
    list: 'Getting Started',
  });

  const todo3 = new Todo({
    title: 'Click the trash icon on a todo to delete it',
    list: 'Getting Started',
  });

  const todo4 = new Todo({
    title: 'Click the "New Todo" button to add a new todo',
    list: 'Getting Started',
  });

  const todo5 = new Todo({
    title: 'Click the edit (pencil) icon on a list to edit the list name',
    list: 'Getting Started',
  });

  const todo6 = new Todo({
    title: 'Click the trash icon on a list to delete it',
    description: 'Note: you cannot delete a list if it is the only list remaining',
    list: 'Getting Started',
  });

  const todo7 = new Todo({
    title: 'Drag todos to rearrange them',
    list: 'Getting Started',
  });

  const todo8 = new Todo({
    title: 'Drag lists to rearrange them',
    list: 'Getting Started',
  });

  const listOfLists = {};
  addTodos(listOfLists, todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8);

  return {
    listOfLists,
    todos: [todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8],
  };
}
