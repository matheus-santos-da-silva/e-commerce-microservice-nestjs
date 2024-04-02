import { CreateCustomerDTO } from 'src/domain/DTOS/create-customer-dto';

export abstract class CreateCustomerRepository {
  abstract create(data: CreateCustomerDTO): Promise<void>;
}
