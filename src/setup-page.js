import { addNewList, updateFormSelectOptions } from './update-page';
import { listOfLists } from './index';
import { tabChange } from './tabs';
import restoreSort from './restore-sort';
import makeTabsSortable from './tab-sort';
import updateListeners from './update-listeners';

function setupPage(allTodos) {
  for (const list in listOfLists) {
    addNewList(list, allTodos);
    updateFormSelectOptions(list);
  }
  
  makeTabsSortable();
  restoreSort();
  updateListeners();

  const lastTab = localStorage.getItem('lastTab');
  if (lastTab) tabChange(lastTab);
  else {
    const allTabs = Array.from(document.querySelectorAll('.tab'));
    tabChange(allTabs[0].id);
  }
}

export { setupPage };
