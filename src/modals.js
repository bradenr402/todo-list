import removeTimeZone from './remove-timezone';

const newDialog = document.querySelector('.modal.new-todo');
const newTodoButton = document.querySelector('.new-todo-btn');

newTodoButton.addEventListener('click', () => {
  newDialog.showModal();
});

const closeModalButtons = document.querySelectorAll('.close-modal-btn');
closeModalButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.parentElement.parentElement;
    if (modal.tagName === 'DIALOG') modal.close();
  });
});

function updateEditTodoButtonEventListeners() {
  const editTodoButtons = document.querySelectorAll('.edit-todo-btn');
  const editDialog = document.querySelector('.modal.edit-todo');

  editTodoButtons.forEach((btn) => {
    const old_btn = btn;
    const new_btn = old_btn.cloneNode(true);
    old_btn.parentNode.replaceChild(new_btn, old_btn);

    new_btn.addEventListener('click', () => {
      editDialog.showModal();

      const titleField = document.getElementById('editTitle');
      const dueDateField = document.getElementById('editDueDate');
      const descriptionField = document.getElementById('editDescription');
      const hiddenIdField = document.getElementById('hiddenId');

      const btnId = btn.id.split('-')[1]; // extract id from btn element

      const titleId = `title-${btnId}`;
      const dueDateId = `dueDate-${btnId}`;
      const descriptionId = `description-${btnId}`;

      const titleElement = document.getElementById(titleId);
      const dueDateElement = document.getElementById(dueDateId);
      const descriptionElement = document.getElementById(descriptionId);

      titleField.value = titleElement ? titleElement.textContent : '';

      let dueDateValue = new Date(dueDateElement.textContent);

      dueDateValue = removeTimeZone(dueDateValue);

      const day = ('0' + dueDateValue.getDate()).slice(-2);
      const month = ('0' + (dueDateValue.getMonth() + 1)).slice(-2);
      const today = dueDateValue.getFullYear() + '-' + month + '-' + day;
      dueDateField.value = today;

      descriptionField.value = descriptionElement
        ? descriptionElement.textContent
        : '';
      hiddenIdField.value = btnId;
    });
  });
}

function updateEditListButtonEventListeners() {
  const editListButtons = document.querySelectorAll('.edit-list-btn');
  const listDialog = document.querySelector('.modal.edit-list');

  editListButtons.forEach((btn) => {
    const old_btn = btn;
    const new_btn = old_btn.cloneNode(true);
    old_btn.parentNode.replaceChild(new_btn, old_btn);

    new_btn.addEventListener('click', () => {
      listDialog.showModal();

      const titleField = document.getElementById('listTitle');

      const btnId = btn.id.split('-')[1];

      const tabElement = document.getElementById(btnId);

      titleField.value = tabElement ? tabElement.textContent : '';
    });
  });
}

export {
  updateEditTodoButtonEventListeners,
  updateEditListButtonEventListeners,
};
