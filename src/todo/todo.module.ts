import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './entities/todo.entity';
import { TodoBdController } from './todo-bd.controller';
import { TodoBdService } from './todo-bd.service';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController, TodoBdController],
  providers: [TodoService, TodoBdService],
})
export class TodoModule {}
