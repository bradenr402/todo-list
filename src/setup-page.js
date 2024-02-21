import { addNewList, updateFormSelectOptions } from './update-page';
import listOfLists from './index';

function setupPage(allTodos) {
  const allLists = Object.keys(listOfLists);

  const sidebarContainer = document.querySelector('.side-links');

  const content = document.querySelector('.content');
  for (const list of allLists) {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = list;
    h3.classList.add('list-title');
    li.appendChild(h3);
    sidebarContainer.appendChild(li);

    addNewList(list, allTodos, content);
  }

  const main = document.querySelector('body main');
  main.appendChild(content);

  allTodos.forEach((todo) => {
    updateFormSelectOptions(todo);
  });
}

export { setupPage };
