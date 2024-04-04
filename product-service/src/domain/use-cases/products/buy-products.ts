import { BuyProductsDTO } from 'src/domain/DTOS/buy-products-dto';

export abstract class BuyProducts {
  abstract buy(products: BuyProductsDTO): Promise<void>;
}
