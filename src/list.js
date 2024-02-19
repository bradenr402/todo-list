export default class List {
  constructor(title, todos = []) {
    this.title = title;
    this.todos = todos;
  }

  addTasks(...tasks) {
    for (const task of tasks) {
      this.todos.push(task);
    }
  }

  getTodos() {
    let todoList = '';
    for (const todo of this.todos) {
      todoList += `\n- ${todo.title}`;
    }
    return `${this.title} todos: ${todoList}`;
  }
}
