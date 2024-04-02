import { CreateCustomerDTO } from 'src/domain/DTOS/create-customer-dto';

export abstract class CreateCustomer {
  abstract create(data: CreateCustomerDTO): Promise<void>;
}
