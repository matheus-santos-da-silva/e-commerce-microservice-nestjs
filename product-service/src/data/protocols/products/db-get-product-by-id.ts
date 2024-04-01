import { Product } from 'src/domain/models/products/product';

export abstract class GetProductByIdRepository {
  abstract getById(id: string): Promise<Product>;
}
