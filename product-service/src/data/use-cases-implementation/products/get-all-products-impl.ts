import { Injectable } from '@nestjs/common';
import { GetAllProductsRepository } from 'src/data/protocols/products';
import { Product } from 'src/domain/models/products/product';
import { GetAllProducts } from 'src/domain/use-cases/products';

@Injectable()
export class GetAllProductsImplementation implements GetAllProducts {
  constructor(private readonly repository: GetAllProductsRepository) {}

  async getAll(): Promise<Product[]> {
    const products = await this.repository.getAll();
    return products;
  }
}
