import { Todo, addTodos } from './todo';

export default function createDefaultTodos() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todo1 = new Todo({
    title: 'Click the checkbox or the title on a todo to mark it as complete',
    description: 'Click it again to mark it as incomplete',
  });

  const todo2 = new Todo({
    title: 'Click the edit (pencil) icon on a todo to edit it',
  });

  const todo3 = new Todo({
    title: 'Click the trash icon on a todo to delete it',
  });

  const todo4 = new Todo({
    title: 'Click the "New Todo" button to add a new todo',
  });

  const todo5 = new Todo({
    title: 'Click the edit (pencil) icon on a list to edit the list name',
  });

  const todo6 = new Todo({
    title: 'Click the trash icon on a list to delete it',
  });

  const todo7 = new Todo({
    title: 'Drag todos to rearrange them',
  });

  const todo8 = new Todo({
    title: 'Drag lists to rearrange them',
  });

  const listOfLists = {};
  addTodos(listOfLists, todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8);

  return {
    listOfLists,
    todos: [todo1, todo2, todo3, todo4, todo5, todo6, todo7, todo8],
  };
}
