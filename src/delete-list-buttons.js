import { tabChange } from './tabs';
import { deleteList } from './todo';

function updateDeleteListButtonEventListeners() {
  const deleteListButtons = document.querySelectorAll('.delete-list-btn');

  deleteListButtons.forEach((btn) => {
    const listId = btn.id.split('-')[1];

    btn.addEventListener('click', () => {
      const allTabs = document.querySelectorAll('.tab');
      if (allTabs.length <= 1) {
        alert("You cannot delete all your lists! Create a new list if you'd like to delete this list.");
        return;
      }

      if (!confirm('Are you sure you want to delete this list?')) return;

      const currentTab = document.querySelector(
        `.side-links .tab-container .tab.selected`
      );

      if (currentTab.id === listId) {
        const firstTab = document.querySelector(
          `.side-links .tab-container .tab`
        );

        const nextTab = document.querySelector(
          `.tab-container:has(.tab#${listId}) + .tab-container .tab`
        );

        if (firstTab.id !== currentTab.id) tabChange(firstTab.id);
        else tabChange(nextTab.id);
      }

      const listArticle = document.querySelector(
        `article.${listId.split(' ').join('_')}`
      );
      const listTab = document.getElementById(listId);

      listArticle.remove();
      listTab.parentElement.remove(); // removes both tab button and delete button
      deleteList(listId);
    });
  });
}

export { updateDeleteListButtonEventListeners };
