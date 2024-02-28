let currentTabId = 'Inbox';

function tabChange(newTabId) {
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach((tab) => {
    tab.classList.remove('selected');
  });

  const allArticles = document.querySelectorAll('article');
  allArticles.forEach((article) => {
    article.classList.add('hidden');
  });

  const newTab = document.getElementById(`${newTabId}`);
  newTab.classList.add('selected');

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
