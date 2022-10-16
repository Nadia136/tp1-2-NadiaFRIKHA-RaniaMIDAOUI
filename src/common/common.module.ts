import { Global, Module } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import { CommonController } from './common.controller';

@Global()
@Module({
  controllers: [CommonController],
  providers: [TodoService],
})
export class CommonModule {}
