import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TodoDto } from './DTOs/todo-dto';
import { UpdateDto } from './DTOs/update-dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Post()
  addTodo(@Body() addedDTO: TodoDto) {
    return this.todoService.addTodo(addedDTO);
  }

  @Get(':id')
  getTodoID(@Param('id') id) {
    return this.todoService.getTodosID(id);
  }

  @Delete(':id')
  deleteTodoID(@Param('id') id) {
    return this.todoService.deleteTodoID(id);
  }

  @Put(':id')
  UpdateTodo(@Param('id') id, @Body() updateTodoDTO: UpdateDto) {
    return this.todoService.putID(id, updateTodoDTO);
  }
}
