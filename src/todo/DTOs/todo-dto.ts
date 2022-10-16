import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class TodoDto {
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
}
