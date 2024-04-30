import { PaymentTypeEnum } from '../enums/payment-type-enum';

export interface BuyProductsImplementationDTO {
  products: [{ code: string; name: string; quantity: number; price: number }];
  customerId: string;
  paymentType: PaymentTypeEnum;
}
