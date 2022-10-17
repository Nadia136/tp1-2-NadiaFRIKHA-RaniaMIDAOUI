import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { addTodoDTO } from './DTOs/addtodo-DTO';
import { UpdateDto } from './DTOs/update-dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoBdService } from './todo-bd.service';

@Controller('todo-bd')
export class TodoBdController {
  constructor(private todoBDservice: TodoBdService) {}

  @Post()
  async addtodo(@Body() addTodo: addTodoDTO) {
    return await this.todoBDservice.addtodo(addTodo);
  }
  @Patch(':id')
  updateTodo(
    @Body() updateDto: UpdateDto,
    @Param('id') id: string,
  ): Promise<TodoEntity> {
    return this.todoBDservice.updateTodo(updateDto, id);
  }
  @Delete('/soft/:id')
  softDeleteTodo(@Param('id') id: string): Promise<UpdateResult> {
    return this.todoBDservice.softDeleteTodo(id);
  }
  /*@Delete('/:id')
  deleteTodo(@Param('id') id: string): Promise<UpdateResult> {
    return this.todoBDservice.deleteTodo(id);
  }*/
}
