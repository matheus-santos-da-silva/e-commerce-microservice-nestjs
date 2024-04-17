import { BuyProductsImplementationDTO } from 'src/domain/DTOS/buy-products-implementation-dto';

export abstract class BuyProducts {
  abstract buy(products: BuyProductsImplementationDTO): Promise<void>;
}
