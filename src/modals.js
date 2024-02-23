import removeTimeZone from "./remove-timezone";

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
    btn.addEventListener('click', () => {
      editDialog.showModal();

      const titleField = document.getElementById('editTitle');
      const dueDateField = document.getElementById('editDueDate');
      const descriptionField = document.getElementById('editDescription');
      const listField = document.getElementById('editList');
      const hiddenIdField = document.getElementById('hiddenId');

      const btnId = btn.id.split('-')[1]; // extract id from btn element

      const titleId = `title-${btnId}`;
      const dueDateId = `dueDate-${btnId}`;
      const descriptionId = `description-${btnId}`;

      const titleElement = document.getElementById(titleId);
      const dueDateElement = document.getElementById(dueDateId);
      const descriptionElement = document.getElementById(descriptionId);
      const listElement = btn.parentElement.parentElement.previousElementSibling; // selects the list heading above the todo being edited

      titleField.value = titleElement ? titleElement.textContent : '';

      let dueDateValue = new Date(dueDateElement.textContent);

      dueDateValue = removeTimeZone(dueDateValue);

      const day = ('0' + dueDateValue.getDate()).slice(-2);
      const month = ('0' + (dueDateValue.getMonth() + 1)).slice(-2);
      const today = dueDateValue.getFullYear() + '-' + month + '-' + day;
      dueDateField.value = today;

      descriptionField.value = descriptionElement ? descriptionElement.textContent : '';
      listField.value = listElement ? listElement.textContent : '';
      hiddenIdField.value = btnId;
    });
  });
}

export { updateEditTodoButtonEventListeners };
