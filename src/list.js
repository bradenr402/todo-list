export default class List {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }

  addTask(task) {
    this.todos.push(task);
  }

  getTodos() {
    let todoList = '';
    for (const todo of this.todos) {
      todoList += `\n- ${todo.title}`;
    }
    return `${this.name} todos: ${todoList}`;
  }
}
