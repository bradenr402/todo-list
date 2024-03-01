import listOfLists from './index';
import { Todo } from './todo';
import { addNewTodo } from './update-page';
import updateStoredList from './update-stored-list';

const replayTutorialBtn = document.querySelector('.replay-tutorial-btn');

replayTutorialBtn.addEventListener('click', () => {
  localStorage.setItem('savedList', JSON.stringify(listOfLists));
  localStorage.setItem('playingTutorial', true);
  localStorage.removeItem('listOfLists');
  location.reload();
});

const endTutorialBtn = document.querySelector('.end-tutorial-btn');

endTutorialBtn.addEventListener('click', () => {
  for (const key in listOfLists) {
    delete listOfLists[key];
  }
  const savedList = JSON.parse(localStorage.getItem('savedList'));

  for (const key in savedList) {
    const savedTodos = savedList[key];
    const todos = (listOfLists[key] = []);

    for (let i = 0; i < savedTodos.length; i++) {
      todos[i] = new Todo({
        title: savedTodos[i].title,
        dueDate: savedTodos[i].dueDate,
        list: savedTodos[i].list,
        description: savedTodos[i].description,
        completed: savedTodos[i].completed,
        id: savedTodos[i].id,
      });
    }
  }

  localStorage.clear();
  updateStoredList();
  location.reload();
});

if (localStorage.getItem('playingTutorial')) {
  replayTutorialBtn.classList.add('hidden');
} else {
  endTutorialBtn.classList.add('hidden');
}
