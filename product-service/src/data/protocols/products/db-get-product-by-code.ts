import { Product } from 'src/domain/models/products/product';

export abstract class GetProductByCodeRepository {
  abstract getByCode(code: string): Promise<Product | null>;
}
