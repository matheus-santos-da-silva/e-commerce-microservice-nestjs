import { Product } from 'src/domain/models/products/product';

export abstract class CreateProductRepository {
  abstract create(product: Product): Promise<Product>;
}
