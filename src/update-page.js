import { addListDropdown, addItemToDropdown } from './setup-page';

export default function updatePage(newTodo) {
  console.log('within updatePage(): ', newTodo);
  const allLists = [];

  const sideLinks = document.querySelectorAll('.side-links li h3');
  sideLinks.forEach((link) => {
    if (!allLists.includes(link.textContent)) allLists.push(link.textContent);
  });

  if (!allLists.includes(newTodo.list)) {
    const sidebarContainer = document.querySelector('.side-links');

    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = newTodo.list;
    h3.classList.add('list-title');
    li.appendChild(h3);
    sidebarContainer.appendChild(li);
  }

  const content = document.querySelector('.content');
  if (!allLists.includes(newTodo.list)) {
    addListDropdown(newTodo.list, [newTodo], content);
  } else {
    const ul = document.querySelector(`ul.${newTodo.list.split(' ').join('')}`);
    addItemToDropdown(newTodo, ul, newTodo.list);
  }

  const main = document.querySelector('body main');
  main.appendChild(content);
}
