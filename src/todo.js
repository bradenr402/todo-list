import { format } from 'date-fns';

export default class Todo {
  constructor(
    title,
    description,
    dueDate = new Date(),
    priority = null,
    completed = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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
    return `Todo info:
- Title: ${this.title}
- Description: ${this.description}
- Due Date: ${format(this.dueDate, 'yyyy-MM-dd')}
- Priority: ${this.priority}
- Completed: ${this.completed ? 'Yes' : 'No'}`;
  }
}
