import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { addTodoDTO } from './DTOs/addtodo-DTO';
import { UpdateDto } from './DTOs/update-dto';
import { TodoEntity } from './entities/todo.entity';

@Injectable()
export class TodoBdService {
  constructor(
    @InjectRepository(TodoEntity)
    private todoRepository: Repository<TodoEntity>,
  ) {}

  async addtodo(todo: addTodoDTO): Promise<TodoEntity> {
    return await this.todoRepository.save(todo);
  }

  async updateTodo(updateDto: UpdateDto, id: string): Promise<TodoEntity> {
    const newTodo = await this.todoRepository.preload({ id, ...updateDto });
    if (newTodo) {
      return this.todoRepository.save(newTodo);
    } else {
      throw new NotFoundException(`ID ${id} does not exist`);
    }
  }
  async softDeleteTodo(id: string): Promise<UpdateResult> {
    const result = await this.todoRepository.softDelete(id);
    if (result.affected) {
      return result;
    }
    throw new NotFoundException(`ID ${id} does not exist`);
  }
  /*async deleteTodo(id: string): Promise<UpdateResult> {
    const result1 = await this.todoRepository.delete(id);
    if (result1.affected) {
      return result1;
    }
    throw new NotFoundException(`ID ${id} does not exist`);
  }*/
}
