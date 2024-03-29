export interface ProductProps {
  name: string;
  price: number;
  code: string;
  quantity: number;
  ownerId: string;
}

export class Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  code: string;
  ownerId: string;

  constructor({ code, name, price, quantity, ownerId }: ProductProps) {
    this.code = code;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.ownerId = ownerId;
  }
}
