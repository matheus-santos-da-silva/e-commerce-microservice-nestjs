import { CreateProductDTO } from 'src/domain/DTOS/create-product-dto';
import { Product } from 'src/domain/models/products/product';

export abstract class CreateProductRepository {
  abstract create(product: CreateProductDTO): Promise<Product>;
}
