import { addNewList, updateFormSelectOptions } from './update-page';
import listOfLists from './index';
import { tabChange } from './tabs';

function setupPage(allTodos) {
  for (const list of Object.keys(listOfLists)) {
    addNewList(list, allTodos);
  }
  tabChange(Object.keys(listOfLists)[0])

  Object.keys(listOfLists).forEach((list) => {
    updateFormSelectOptions(list);
  });
}

export { setupPage };
