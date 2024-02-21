import { format } from 'date-fns';

class Todo {
  static lastId = 0

  constructor({ title, dueDate = new Date(), list = 'Inbox', description }) {
    this.title = title;
    this.dueDate = dueDate;
    this.list = list;
    this.description = description;
    this.completed = false;
    this.id = ++Todo.lastId;
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

export { Todo, addTodos };
