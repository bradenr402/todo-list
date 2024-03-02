function tabChange(newTabId) {
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach((tab) => {
    tab.classList.remove('selected');
  });

  const allArticles = document.querySelectorAll('article');
  allArticles.forEach((article) => {
    article.classList.add('hidden');
  });

  let newTab = document.getElementById(`${newTabId}`);
  if (!newTab) {
    const allTabs = Array.from(document.querySelectorAll('.tab'));
    newTab = allTabs[0];
    newTabId = newTab.id;
  }
  newTab.classList.add('selected');

  const newTabArticle = document.querySelector(
    `article.${newTabId.split(' ').join('_')}`
  );
  newTabArticle.classList.remove('hidden');

  localStorage.setItem('lastTab', newTabId);
}

function updateTabEventListeners() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      const classList = Array.from(event.target.classList);
      if (!classList.includes('selected')) tabChange(event.target.id);
    });
  });
}

export { tabChange, updateTabEventListeners };
