import { Type } from 'class-transformer';
import {
  IsDate,
  IsString,
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;
  // @IsStrongPassword()
  @IsNotEmpty()
  password: string;
}
