import { Injectable } from '@nestjs/common';
import { DeleteProductRepository } from 'src/data/protocols/products';
import { DeleteProduct } from 'src/domain/use-cases/products';

@Injectable()
export class DeleteProductImplementation implements DeleteProduct {
  constructor(private readonly repository: DeleteProductRepository) {}

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
