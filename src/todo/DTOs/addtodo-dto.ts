/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString, } from 'class-validator';

export class addTodoDTO {
    @IsString({
        message: 'The name must be a string',
      })
      @IsNotEmpty({
        message: 'The name must not be empty',
      })
  name: string;
  
  @IsString({
    message: 'The description must be a string',
  })
  @IsNotEmpty({
    message: 'The description must not be empty',
  })  description: string;
}
