import { Injectable } from '@nestjs/common';
import { TodoModel } from './models/todo-model';
import { TodoDto } from './DTOs/todo-dto';
import { UpdateDto } from './DTOs/update-dto';

@Injectable()
export class TodoService {
  todos: TodoModel[];

  constructor() {
    this.todos = [];
  }

  getTodos(): TodoModel[] {
    return this.todos;
  }

  addTodo(addedDTO: TodoDto): TodoModel {
    const addedTodo = new TodoModel(addedDTO.name, addedDTO.description);
    console.log(addedTodo.id);
    this.todos.push(addedTodo);
    return addedTodo;
  }

  getTodosID(id: number) {
    if (!this.todos.find((todo) => todo.id == id)) {
      return 'TODO NOT FOUND';
    } else {
      return this.todos.find((todo) => todo.id == id);
    }
  }

  deleteTodoID(id: number) {
    this.todos = this.todos.filter((todo) => todo.id != id);

    return 'TODO Deleted !';
  }

  putID(id: number, updateTodoDTO: UpdateDto) {
    const todo = this.todos.find((todo) => todo.id == id);
    if (updateTodoDTO.name) {
      todo.name = updateTodoDTO.name;
    }
    if (updateTodoDTO.description) {
      todo.description = updateTodoDTO.description;
    }
    if (updateTodoDTO.status) {
      todo.status = updateTodoDTO.status;
    }
    return todo;
  }
}
