import { PaymentTypeEnum } from '../enums/payment-type-enum';

export class CreateOrderDTO {
  customerId: string;
  products: [{ code: string; name: string; quantity: number; price: number }];
  paymentType: PaymentTypeEnum;
}
