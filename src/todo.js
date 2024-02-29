import { format } from 'date-fns';
import listOfLists from './index';

class Todo {
  static lastId = 0;

  constructor({
    title,
    dueDate = new Date(),
    list = 'Inbox',
    description,
    completed = false,
    id = ++Todo.lastId,
  }) {
    this.title = title;
    this.dueDate = dueDate;
    this.list = list;
    this.description = description;
    this.completed = completed;
    this.id = id;
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
  for (const key in listOfLists) {
    for (const todo of listOfLists[key]) {
      if (todo.id === +id) return todo;
    }
  }
  return null;
}

function deleteTodo(todoToDelete) {
  for (const key in listOfLists) {
    const todos = listOfLists[key];
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
  for (const key in listOfLists) {
    if (key === listToDelete) {
      delete listOfLists[listToDelete];
    }
  }
}

export { Todo, addTodos, getTodoById, deleteTodo, deleteList };
