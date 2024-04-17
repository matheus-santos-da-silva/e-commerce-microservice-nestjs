import { Injectable } from '@nestjs/common';
import { CreateProductRepository } from 'src/data/protocols/products';
import { Product } from 'src/domain/models/products/product';
import { CreateProduct } from 'src/domain/use-cases/external/products';

@Injectable()
export class CreateProductImplementation implements CreateProduct {
  constructor(private readonly repository: CreateProductRepository) {}

  async create(product: Product): Promise<Product> {
    const newProduct = await this.repository.create(product);
    return newProduct;
  }
}
