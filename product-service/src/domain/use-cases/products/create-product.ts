import { CreateProductDTO } from 'src/domain/DTOS/create-product-dto';
import { Product } from 'src/domain/models/products/product';

export abstract class CreateProduct {
  abstract create(product: CreateProductDTO): Promise<Product>;
}
