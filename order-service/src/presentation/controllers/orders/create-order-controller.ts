import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateOrderDTO } from 'src/domain/DTOS/create-order-dto';
import { CreateOrder } from 'src/domain/use-cases/external/orders';

@Controller()
export class CreateOrderController {
  constructor(private readonly createOrder: CreateOrder) {}

  @MessagePattern('products-buy-products')
  async execute(data: CreateOrderDTO) {
    await this.createOrder.create(data);
  }
}
