import { Order } from '../orders/order';

export interface CustomerProps {
  id: string;
  email: string;
}

export class Customer {
  id: string;
  email: string;
  order: Order[];

  constructor({ id, email }: CustomerProps) {
    this.id = id;
    this.email = email;
  }
}
