export class CreateOrderDTO {
  customerId: string;
  products: [{ code: string; name: string; quantity: number; price: number }];
}
