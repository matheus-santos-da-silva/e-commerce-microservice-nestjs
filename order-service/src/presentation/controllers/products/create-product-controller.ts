import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Product } from 'src/domain/models/products/product';
import { CreateProduct } from 'src/domain/use-cases/external/products';

@Controller()
export class CreateProductController {
  constructor(private readonly createProduct: CreateProduct) {}

  @MessagePattern('products-create-product')
  async execute(data: Product): Promise<void> {
    await this.createProduct.create(data);
  }
}
