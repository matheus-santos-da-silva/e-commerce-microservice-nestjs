import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PaymentTypeEnum } from 'src/domain/enums/payment-type-enum';

export class BuyProductDTO {
  @ApiProperty({ example: '8474624259399925000' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ example: 'Cadeira' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '100' })
  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty({ example: '250.00' })
  @IsNumber()
  @IsNotEmpty()
  price: number;
}

export class BuyProductsVM {
  @ApiProperty({
    example: BuyProductDTO,
    type: [BuyProductDTO],
    patternProperties: BuyProductDTO,
  })
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => BuyProductDTO)
  products: [{ code: string; name: string; price: number; quantity: number }];

  @ApiProperty({ example: 'PIX' })
  @IsEnum(PaymentTypeEnum)
  @IsNotEmpty()
  paymentType: PaymentTypeEnum;
}
