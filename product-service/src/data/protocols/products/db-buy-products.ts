import { BuyProductsDTO } from 'src/domain/DTOS/buy-products-dto';
import { BuyProductsImplementationDTO } from 'src/domain/DTOS/buy-products-implementation-dto';

export abstract class BuyProductsRepository {
  abstract buy(products: BuyProductsImplementationDTO): Promise<void>;
  abstract checkProductsStock(products: BuyProductsDTO): Promise<boolean>;
}
