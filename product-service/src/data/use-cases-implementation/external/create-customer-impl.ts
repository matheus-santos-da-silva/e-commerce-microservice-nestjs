import { Injectable } from '@nestjs/common';
import { CreateCustomerRepository } from 'src/data/protocols/customers/db-create-customer';
import { CreateCustomerDTO } from 'src/domain/DTOS/create-customer-dto';
import { CreateCustomer } from 'src/domain/use-cases/external/create-customer';

@Injectable()
export class CreateCustomerImplementation implements CreateCustomer {
  constructor(private readonly repository: CreateCustomerRepository) {}

  async create(data: CreateCustomerDTO): Promise<void> {
    await this.repository.create(data);
  }
}
