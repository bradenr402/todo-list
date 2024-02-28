document.querySelectorAll('.todo').forEach((todo) => {
  todo.addEventListener('mouseover', () => {
    const siblings = Array.from(todo.parentElement.children).filter(
      (element) => element !== todo
    );
    const hasDraggingSibling = siblings.some((sibling) =>
      sibling.classList.contains('dragging')
    );
    if (!hasDraggingSibling) {
      todo.style.backgroundColor = 'var(--light-gray)';
    }
  });

  todo.addEventListener('mouseout', () => {
    todo.style.backgroundColor = ''; // Reset to default background color
  });
});
