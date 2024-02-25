import './style.css';
import './modals';
import './forms';
import createDefaultTodos from './create-default-todos';
import { setupPage } from './setup-page';
import { updateTabEventListeners } from './tabs';
import { updateTodoEventListeners } from './complete-todos';
import { updateEditTodoButtonEventListeners } from './modals';
import { updateEditTodoFormEventListeners } from './forms';
import { updateDeleteTodoButtonEventListeners } from './delete-todos';

const { listOfLists, todos } = createDefaultTodos();
export default listOfLists;

setupPage(todos);
updateTabEventListeners();
updateTodoEventListeners();
updateEditTodoButtonEventListeners();
updateEditTodoFormEventListeners();
updateDeleteTodoButtonEventListeners();
