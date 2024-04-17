import { Injectable } from '@nestjs/common';
import { GetCustomerByIdRepository } from 'src/data/protocols/customers';
import { CreateOrderRepository } from 'src/data/protocols/orders';
import { GetProductByCodeRepository } from 'src/data/protocols/products';
import { CreateOrderDTO } from 'src/domain/DTOS/create-order-dto';
import { CreateOrder } from 'src/domain/use-cases/external/orders';

@Injectable()
export class CreateOrderImplementation implements CreateOrder {
  constructor(
    private readonly repository: CreateOrderRepository,
    private readonly getCustomerById: GetCustomerByIdRepository,
    private readonly getProductByCode: GetProductByCodeRepository,
  ) {}

  async create({ customerId, products }: CreateOrderDTO): Promise<void> {
    let orderAmount: number = 0;
    const customer = await this.getCustomerById.getById(customerId);
    const productsArray = products.map(async (product) => {
      const prod = await this.getProductByCode.getByCode(product.code);
      orderAmount += product.quantity * product.price;
      return {
        id: prod.id,
        name: prod.name,
        code: prod.code,
        price: prod.price,
        quantity: product.quantity,
      };
    });
    await this.repository.create({
      customer,
      orderItems: await Promise.all(productsArray),
      orderAmount,
    });
  }
}
