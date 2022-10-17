import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { timestampEntities } from '../generic/timestamp.entities';
import { TodoStatusEnum } from '../models/todo-status-enum';

@Entity('todoent')
export class TodoEntity extends timestampEntities {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  status: TodoStatusEnum.waiting;
}
