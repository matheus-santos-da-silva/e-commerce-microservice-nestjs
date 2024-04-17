import { Product } from 'src/domain/models/products/product';

export abstract class CreateProduct {
  abstract create(product: Product): Promise<Product>;
}
