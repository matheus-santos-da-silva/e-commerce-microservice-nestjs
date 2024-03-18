import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserVM {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'johndoe@example.com' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '6437949501' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'johndoe123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
