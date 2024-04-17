import { Customer } from '../customers/customer';
import { OrderItems } from '../order-items/order-items';

export interface OrderProps {
  customer: Customer;
  customerId: string;
  orderItems: OrderItems[];
  orderAmount: number;
}

export class Order {
  id: string;
  customer: Customer;
  customerId: string;
  orderAmount: number;
  orderItems: OrderItems[];

  constructor({ customer, customerId, orderItems, orderAmount }: OrderProps) {
    this.customer = customer;
    this.customerId = customerId;
    this.orderItems = orderItems;
    this.orderAmount = orderAmount;
  }
}
