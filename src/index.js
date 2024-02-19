import './style.css';
import './modals';
import './forms';
import createDefaultTodos from './create-default-todos';
import { setupPage } from './setup-page';

setupPage(createDefaultTodos());
