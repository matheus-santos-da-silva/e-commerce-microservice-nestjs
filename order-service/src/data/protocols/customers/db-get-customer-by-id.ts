import { Customer } from 'src/domain/models/customers/customer';

export abstract class GetCustomerByIdRepository {
  abstract getById(id: string): Promise<Omit<Customer, 'order'>>;
}
