import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { StatusEnum } from './tasks.enum';

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNumber()
  price: number;
}

export class UpdateTaskDTO {
  @IsNumber()
  price: number;

  @IsEnum(StatusEnum)
  status: StatusEnum;
}
