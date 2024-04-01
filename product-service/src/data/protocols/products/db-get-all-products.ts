import { Product } from 'src/domain/models/products/product';

export abstract class GetAllProductsRepository {
  abstract getAll(): Promise<Product[]>;
}
