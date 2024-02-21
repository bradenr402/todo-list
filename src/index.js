import './style.css';
import './modals';
import './forms';
import createDefaultTodos from './create-default-todos';
import { setupPage } from './setup-page';
import { tabChange, updateTabEventListeners } from './tabs';

const { listOfLists, todos } = createDefaultTodos();
export default listOfLists;

setupPage(todos);
updateTabEventListeners();
