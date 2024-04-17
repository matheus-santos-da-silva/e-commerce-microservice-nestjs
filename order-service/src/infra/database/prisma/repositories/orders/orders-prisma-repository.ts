import {
  CreateOrderItemsRepository,
  CreateOrderRepository,
} from 'src/data/protocols/orders';
import { PrismaService } from '../../config/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateOrderInfraDTO } from 'src/domain/DTOS/create-order-infra-dto';
import { GetCustomerByIdRepository } from 'src/data/protocols/customers';
import { Customer } from 'src/domain/models/customers/customer';
import { OrderItems } from 'src/domain/models/order-items/order-items';

@Injectable()
export class OrdersPrismaRepository
  implements
    CreateOrderRepository,
    GetCustomerByIdRepository,
    CreateOrderItemsRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async createOrderItems(
    order: OrderItems,
    orderId: string,
  ): Promise<OrderItems> {
    const orderItem = await this.prisma.orderItems.create({
      data: {
        quantity: order.quantity,
        product: { connect: order.product },
        order: { connect: { id: orderId } },
        orderId: orderId as never,
        productId: order.product.id as never,
      },
    });

    return {
      product: order.product,
      quantity: order.quantity,
      order: order.order,
      id: orderItem.id,
      orderId: orderId,
      productId: order.product.id,
    };
  }

  async getById(id: string): Promise<Omit<Customer, 'order'>> {
    const customer = await this.prisma.customer.findFirst({ where: { id } });
    return customer;
  }

  async create({
    customer,
    orderItems,
    orderAmount,
  }: CreateOrderInfraDTO): Promise<void> {
    const order = await this.prisma.order.create({
      data: {
        customer: {
          connect: { id: customer.id },
        },
        orderAmount,
      },
    });

    for (const item of orderItems) {
      await this.prisma.orderItems.create({
        data: {
          quantity: item.quantity,
          product: {
            connect: { id: item.id },
          },
          order: {
            connect: { id: order.id },
          },
        },
      });
    }
  }
}
