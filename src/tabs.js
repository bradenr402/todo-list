let currentTabId = 'Inbox';

function tabChange(newTabId) {
  let currentTab = document.getElementById(`${currentTabId}`);
  currentTab.classList.remove('selected');

  let newTab = document.getElementById(`${newTabId}`);
  newTab.classList.add('selected');
}

function updateTabEventListeners() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', (event) => {
      console.log(event.target.id, currentTabId);
      if (event.target.id !== currentTabId) tabChange(event.target.id);

      currentTabId = tab.id;
    });
  });
}

export { tabChange, updateTabEventListeners };
