import { Product } from 'src/domain/models/products/product';

export abstract class GetAllProducts {
  abstract getAll(): Promise<Product[]>;
}
