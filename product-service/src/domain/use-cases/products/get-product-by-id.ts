import { Product } from 'src/domain/models/products/product';

export abstract class GetProductById {
  abstract getById(id: string): Promise<Product>;
}
