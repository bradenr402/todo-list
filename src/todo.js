import { format } from 'date-fns';

export default class Todo {
  constructor(
    title,
    description,
    dueDate = new Date(),
    priority = 1,
    complete = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.complete = complete;
  }

  markComplete() {
    this.complete = true;
  }

  markUncomplete() {
    this.complete = false;
  }

  toggleComplete() {
    this.complete = !this.complete;
  }

  getInfo() {
    return `Todo info:
- Title: ${this.title}
- Description: ${this.description}
- Due Date: ${format(this.dueDate, 'yyyy-MM-dd')}
- Priority: ${this.priority}
- Complete: ${this.complete ? 'Yes' : 'No'}`;
  }
}
