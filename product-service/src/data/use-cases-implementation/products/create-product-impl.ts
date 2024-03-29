import { Injectable } from '@nestjs/common';
import { CreateProductRepository } from 'src/data/protocols/products/db-create-product';
import { CreateProductDTO } from 'src/domain/DTOS/create-product-dto';
import { Product } from 'src/domain/models/products/product';
import { CreateProduct } from 'src/domain/use-cases/products';

@Injectable()
export class CreateProductImplementation implements CreateProduct {
  constructor(private readonly repository: CreateProductRepository) {}

  async create(product: CreateProductDTO): Promise<Product> {
    const newProduct = await this.repository.create(product);
    return newProduct;
  }
}
