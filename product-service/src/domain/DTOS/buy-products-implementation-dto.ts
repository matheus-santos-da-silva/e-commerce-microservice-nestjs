export interface BuyProductsImplementationDTO {
  products: [{ code: string; name: string; quantity: number; price: number }];
  customerId: string;
}
