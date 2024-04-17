import { Customer } from '../models/customers/customer';

export class CreateOrderInfraDTO {
  customer: Omit<Customer, 'order'>;
  orderItems: {
    id: string;
    name: string;
    code: string;
    price: number;
    quantity: number;
  }[];
  orderAmount: number;
}
