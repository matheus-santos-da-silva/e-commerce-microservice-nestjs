import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateProductVM {
  @ApiProperty({ example: 'Cadeira' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '250.00' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: '100' })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}
