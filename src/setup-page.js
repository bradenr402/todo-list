import { addNewList, updateFormSelectOptions } from './update-page';
import listOfLists from './index';

function setupPage(allTodos) {
  for (const list of Object.keys(listOfLists)) {
    addNewList(list, allTodos);
  }

  Object.keys(listOfLists).forEach((list) => {
    updateFormSelectOptions(list);
  });
}

export { setupPage };
