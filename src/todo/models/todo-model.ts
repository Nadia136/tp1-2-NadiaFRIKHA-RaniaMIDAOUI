import { TodoStatusEnum } from './todo-status-enum';
import { v4 as uuidv4 } from 'uuid';

export class TodoModel {
  constructor(name, Description) {
    this.id = uuidv4();
    this.name = name;
    this.description = Description;
    this.DateDeCreation = new Date();
    this.status = TodoStatusEnum.waiting;
  }

  id: number;
  name: string;
  description: string;
  DateDeCreation: Date;
  status: TodoStatusEnum.waiting;
}
