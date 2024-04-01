import { Injectable } from '@nestjs/common';
import { UpdateProductRepository } from 'src/data/protocols/products';
import { UpdateProductDTO } from 'src/domain/DTOS/update-product-dto';
import { Product } from 'src/domain/models/products/product';
import { UpdateProduct } from 'src/domain/use-cases/products';

@Injectable()
export class UpdateProductImplementation implements UpdateProduct {
  constructor(private readonly repository: UpdateProductRepository) {}

  async update(id: string, product: UpdateProductDTO): Promise<Product> {
    const updatedProduct = await this.repository.update(id, product);
    return updatedProduct;
  }
}
