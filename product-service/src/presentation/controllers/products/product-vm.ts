import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/domain/models/products/product';

export class ProductResponseViewModel {
  @ApiProperty({ example: '8a18f940-47cc-4174-a32e-1398e290b6f8' })
  id: string;

  @ApiProperty({ example: 'Cadeira' })
  name: string;

  @ApiProperty({ example: '250.00' })
  price: number;

  @ApiProperty({ example: '68812be725b730c8caf06779aca081' })
  code: string;

  @ApiProperty({ example: '100' })
  quantity: number;

  @ApiProperty({ example: '20dfd50f-c05a-443e-8f73-855ec6e9be15' })
  ownerId: string;

  constructor(
    id: string,
    name: string,
    quantity: number,
    ownerId: string,
    price: number,
    code: string,
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.ownerId = ownerId;
    this.price = price;
    this.code = code;
  }

  static toViewModel({
    id,
    name,
    quantity,
    ownerId,
    price,
    code,
  }: Product): ProductResponseViewModel {
    return new ProductResponseViewModel(
      id,
      name,
      quantity,
      ownerId,
      price,
      code,
    );
  }
}
