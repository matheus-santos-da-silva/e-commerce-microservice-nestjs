import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import {
  CreateOrderItemsRepository,
  CreateOrderRepository,
} from 'src/data/protocols/orders';
import { OrdersPrismaRepository } from './orders-prisma-repository';
import { GetCustomerByIdRepository } from 'src/data/protocols/customers';
import { GetProductByCodeRepository } from 'src/data/protocols/products';
import { ProductsPrismaRepository } from '../products/products-prisma-repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateOrderRepository,
      useClass: OrdersPrismaRepository,
    },
    {
      provide: GetCustomerByIdRepository,
      useClass: OrdersPrismaRepository,
    },
    {
      provide: GetProductByCodeRepository,
      useClass: ProductsPrismaRepository,
    },
    {
      provide: CreateOrderItemsRepository,
      useClass: OrdersPrismaRepository,
    },
  ],
  exports: [
    CreateOrderRepository,
    GetCustomerByIdRepository,
    GetProductByCodeRepository,
    CreateOrderItemsRepository,
  ],
})
export class OrdersRepositoriesModule {}
