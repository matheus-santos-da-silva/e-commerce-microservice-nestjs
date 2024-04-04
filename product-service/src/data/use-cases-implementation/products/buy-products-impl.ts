import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import {
  BuyProductsRepository,
  GetProductByCodeRepository,
} from 'src/data/protocols/products';
import { BuyProductsDTO } from 'src/domain/DTOS/buy-products-dto';
import { BuyProducts } from 'src/domain/use-cases/products';
import { PubSubService } from 'src/infra/messaging/redis/pubsub.service';

@Injectable()
export class BuyProductImplementation implements BuyProducts {
  constructor(
    private readonly repository: BuyProductsRepository,
    private readonly getProductByCode: GetProductByCodeRepository,
    private readonly messagingService: PubSubService,
  ) {}

  async buy(products: BuyProductsDTO): Promise<void> {
    for (const product of products.products) {
      const checkProduct = await this.getProductByCode.getByCode(product.code);
      if (!checkProduct) {
        throw new NotFoundException(`Product - ${product.name} was not found`);
      }
    }

    const checkProductsStock =
      await this.repository.checkProductsStock(products);
    if (!checkProductsStock) {
      throw new UnprocessableEntityException('Insufficient stock');
    }
    await this.repository.buy(products);
    await this.messagingService.publish('buy-products', products, 'products');
  }
}
