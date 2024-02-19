const newDialog = document.querySelector('.modal.new-todo');
const editDialog = document.querySelector('.modal.edit-todo');

const newTodoButton = document.querySelector('.new-todo-btn');
// const editTodoButton = document.querySelector('.edit-todo-btn');

const closeModalButtons = document.querySelectorAll('.close-modal-btn');

newTodoButton.addEventListener('click', () => {
  newDialog.showModal();
});

// editTodoButton.addEventListener('click', () => {
//   editDialog.showModal();
// });

closeModalButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.parentElement.parentElement;
    console.log(modal);
    console.log(modal.tagName);
    if (modal.tagName === 'DIALOG') modal.close();
  });
});
