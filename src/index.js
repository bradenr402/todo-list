import './style.css';
import './modals';
import './forms';
import createDefaultTodos from './create-default-todos';
import { setupPage } from './setup-page';

const { listOfLists, todos } = createDefaultTodos();
export default listOfLists;

setupPage(todos);
