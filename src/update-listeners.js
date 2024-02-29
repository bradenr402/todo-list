import { updateTodoEventListeners } from "./complete-todos";
import { updateDeleteListButtonEventListeners } from "./delete-list-buttons";
import { updateDeleteTodoButtonEventListeners } from "./delete-todos";
import { updateEditListButtonEventListeners, updateEditTodoButtonEventListeners } from "./modals";
import { updateTabEventListeners } from "./tabs";

export default function updateListeners() {
  updateTabEventListeners();
  updateTodoEventListeners();
  updateEditTodoButtonEventListeners();
  updateDeleteTodoButtonEventListeners();
  updateEditListButtonEventListeners();
  updateDeleteListButtonEventListeners();
}
