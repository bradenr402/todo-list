import './style.css';
import './modals';
import './forms';
import './tutorial';
import { Todo } from './todo';
import createDefaultTodos from './create-default-todos';
import { setupPage } from './setup-page';
import storageAvailable from './storage-available';

let listOfLists = {},
  initialTodos = [];

// loads saved todos if available, otherwise creates default todos
if (storageAvailable('localStorage') && localStorage.getItem('listOfLists')) {
  let storedList = JSON.parse(localStorage.getItem('listOfLists'));

  for (const list in storedList) {
    const storedTodos = storedList[list];
    const todos = (listOfLists[list] = []);

    for (let i = 0; i < storedTodos.length; i++) {
      todos[i] = new Todo({
        title: storedTodos[i].title,
        dueDate: storedTodos[i].dueDate,
        list: storedTodos[i].list,
        description: storedTodos[i].description,
        completed: storedTodos[i].completed,
        id: storedTodos[i].id,
      });
      initialTodos.push(todos[i]);
    }
  }
} else {
  const defaultTodos = createDefaultTodos();
  initialTodos = defaultTodos.todos;
  listOfLists = defaultTodos.listOfLists;

  localStorage.setItem('listOfLists', JSON.stringify(listOfLists));
}

const sortableInstances = {};
export {listOfLists, sortableInstances};
setupPage(initialTodos);
