import { Injectable } from '@nestjs/common';
import { GetProductByIdRepository } from 'src/data/protocols/products';
import { Product } from 'src/domain/models/products/product';
import { GetProductById } from 'src/domain/use-cases/products';

@Injectable()
export class GetProductByIdImplementation implements GetProductById {
  constructor(private readonly repository: GetProductByIdRepository) {}

  async getById(id: string): Promise<Product> {
    const product = await this.repository.getById(id);
    return product;
  }
}
