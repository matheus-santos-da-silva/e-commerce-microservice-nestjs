import { OrderItems } from 'src/domain/models/order-items/order-items';

export abstract class CreateOrderItemsRepository {
  abstract createOrderItems(
    order: OrderItems,
    orderId: string,
  ): Promise<OrderItems>;
}
