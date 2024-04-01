import { UpdateProductDTO } from 'src/domain/DTOS/update-product-dto';
import { Product } from 'src/domain/models/products/product';

export abstract class UpdateProductRepository {
  abstract update(id: string, product: UpdateProductDTO): Promise<Product>;
}
