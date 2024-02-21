function updateTodoEventListeners() {
  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => {
    const todoId = todo.id;
    const checkbox = document.getElementById(`checkbox-${todoId}`);

    checkbox.addEventListener('change', function () {
      if (this.checked) todo.style.textDecoration = 'line-through';
      else todo.style.textDecoration = 'none';
    });
  });
}

export { updateTodoEventListeners };
