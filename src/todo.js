import { format } from 'date-fns';

export default class Todo {
  constructor({
    title,
    dueDate = new Date(),
    list = 'Inbox',
    description,
    completed = false,
  }) {
    this.title = title;
    this.dueDate = dueDate;
    this.list = list;
    this.description = description;
    this.completed = completed;
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
