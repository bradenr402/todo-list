let currentTabId = 'Inbox';

function tabChange(newTabId) {
  let currentTab = document.getElementById(`${currentTabId}`);
  currentTab.classList.remove('selected');

  let newTab = document.getElementById(`${newTabId}`);
  newTab.classList.add('selected');

  const currentTabArticle = document.querySelector(
    `article.${currentTabId.split(' ').join('_')}`
  );
  currentTabArticle.classList.add('hidden');

  const newTabArticle = document.querySelector(
    `article.${newTabId.split(' ').join('_')}`
  );
  newTabArticle.classList.remove('hidden');

  currentTabId = newTabId;
}

function updateTabEventListeners() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      if (event.target.id !== currentTabId) tabChange(event.target.id);
    });
  });
}

export { tabChange, updateTabEventListeners };
