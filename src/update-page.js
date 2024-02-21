import { addNewList, addNewTodo } from './setup-page';

function updatePage(newTodo) {
  const content = document.querySelector('.content');
  const sideLinks = Array.from(document.querySelectorAll('.side-links li h3'));

  const sideLinksText = sideLinks.map((link) => {
    return link.textContent;
  });

  if (!sideLinksText.includes(newTodo.list)) {
    addNewList(newTodo.list, [newTodo], content);
  } else {
    const ul = document.querySelector(`ul.${newTodo.list.split(' ').join('')}`);
    addNewTodo(newTodo, ul, newTodo.list);
  }

  const main = document.querySelector('body main');
  main.appendChild(content);

  updateSideLinks(newTodo);
}

function updateSideLinks(newTodo) {
  const sideLinks = Array.from(document.querySelectorAll('.side-links li h3'));

  const sideLinksText = sideLinks.map((link) => {
    return link.textContent;
  });

  if (!sideLinksText.includes(newTodo.list)) {
    const sidebarContainer = document.querySelector('.side-links');

    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = newTodo.list;
    h3.classList.add('list-title');
    li.appendChild(h3);
    sidebarContainer.appendChild(li);
  }
}

function updateFormSelectOptions(newTodo) {
  const newTodoForm = document.querySelector('.new-todo-form');
  const editTodoForm = document.querySelector('.edit-todo-form');
  const forms = [newTodoForm, editTodoForm];

  forms.forEach((form) => {
    const select = form.querySelector('.list-select');
    const selectOptions = Array.from(
      document.querySelectorAll('.list-select option')
    );
    const prevLists = selectOptions.map((opt) => opt.textContent);

    if (!prevLists.includes(newTodo.list)) {
      const option = document.createElement('option');
      option.value = newTodo.list;
      option.textContent = newTodo.list;
      select.appendChild(option);
    }
  });
}

export { updateFormSelectOptions, updatePage };
