import { BuyProductsDTO } from 'src/domain/DTOS/buy-products-dto';

export abstract class BuyProductsRepository {
  abstract buy(products: BuyProductsDTO): Promise<void>;
  abstract checkProductsStock(products: BuyProductsDTO): Promise<boolean>;
}
