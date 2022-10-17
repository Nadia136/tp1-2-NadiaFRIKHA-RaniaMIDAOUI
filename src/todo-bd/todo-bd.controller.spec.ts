import { Test, TestingModule } from '@nestjs/testing';
import { TodoBdController } from '../todo/todo-bd.controller';

describe('TodoBdController', () => {
  let controller: TodoBdController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoBdController],
    }).compile();

    controller = module.get<TodoBdController>(TodoBdController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
