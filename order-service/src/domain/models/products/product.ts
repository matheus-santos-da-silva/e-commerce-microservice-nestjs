import { OrderItems } from '../order-items/order-items';

export interface ProductProps {
  name: string;
  code: string;
  price: number;
}

export class Product {
  id: string;
  name: string;
  code: string;
  price: number;
  orderItems?: OrderItems[];

  constructor({ code, name, price }: ProductProps) {
    this.code = code;
    this.name = name;
    this.price = price;
  }
}
