import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateUserVM {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'johndoe@example.com' })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty({ example: '6437949501' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: 'johndoe123' })
  @IsString()
  @IsOptional()
  password?: string;
}
