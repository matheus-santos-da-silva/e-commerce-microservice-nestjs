import { Customer } from 'src/domain/models/customers/customer';

export abstract class GetCustomerById {
  abstract getById(id: string): Promise<Omit<Customer, 'order'>>;
}
