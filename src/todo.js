import { format } from 'date-fns';
import { listOfLists } from './index';

class Todo {
  static globalId = 0;

  constructor({
    title,
    dueDate = new Date(),
    list,
    description,
    completed = false,
    id,
  }) {
    this.title = title;
    this.dueDate = dueDate;
    this.list = list;
    this.description = description;
    this.completed = completed;
    this.id = id ? id : Todo.globalId;

    Todo.globalId++;
  }

  markCompleted() {
    this.completed = true;
  }

  markUncompleted() {
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  getInfo() {
    return `${this.title}:
- Description: ${this.description}
- Due Date: ${format(this.dueDate, 'yyyy-MM-dd')}
- Completed: ${this.completed ? 'Yes' : 'No'}`;
  }
}

function addTodo(list, todo) {
  if (list[todo.list]) {
    list[todo.list].push(todo);
  } else {
    list[todo.list] = [];
    list[todo.list].push(todo);
  }
}

function addTodos(list, ...todos) {
  todos.forEach((todo) => {
    addTodo(list, todo);
  });
}

function getTodoById(id) {
  for (const list in listOfLists) {
    for (const todo of listOfLists[list]) {
      if (todo.id === +id) return todo;
    }
  }
  return null;
}

function deleteTodo(todoToDelete) {
  for (const list in listOfLists) {
    const todos = listOfLists[list];
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoToDelete.id) {
        todos.splice(i, 1);
        return true;
      }
    }
  }
  return false;
}

function deleteList(listToDelete) {
  for (const list in listOfLists) {
    if (list === listToDelete) {
      delete listOfLists[listToDelete];
    }
  }
}

export { Todo, addTodos, getTodoById, deleteTodo, deleteList };
