import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { TodoStatusEnum } from '../models/todo-status-enum';

// export class UpdateDto extends PartialType(TodoDto)
export class UpdateDto {
  @IsOptional()
  @IsString({
    message: 'The name must be a string',
  })
  @IsNotEmpty({
    message: 'The name must not be empty',
  })
  @MinLength(3, {
    message: 'The minimum length of the description must be 3 chracters',
  })
  @MaxLength(10, {
    message: 'The maximum length of the description must be 10 chracters',
  })
  name: string;

  @IsOptional()
  @IsString({
    message: 'The description must be a string',
  })
  @IsNotEmpty({
    message: 'The description must not be empty',
  })
  @MinLength(10, {
    message: 'The minimum length of the description must be 10 chracters',
  })
  description: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum.waiting;
}
