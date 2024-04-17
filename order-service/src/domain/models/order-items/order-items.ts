import { Order } from '../orders/order';
import { Product } from '../products/product';

export interface OrderItemsProps {
  product: Product;
  quantity: number;
  order: Order;
  productId: string;
}
export class OrderItems {
  id: string;
  product: Product;
  quantity: number;
  order: Order;
  orderId: string;
  productId: string;

  constructor({ order, product, productId, quantity }: OrderItemsProps) {
    this.order = order;
    this.product = product;
    this.productId = productId;
    this.quantity = quantity;
  }
}
