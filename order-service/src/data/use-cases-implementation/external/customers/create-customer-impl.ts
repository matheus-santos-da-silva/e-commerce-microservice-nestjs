import { Injectable } from '@nestjs/common';
import { CreateCustomerRepository } from 'src/data/protocols/customers';
import { CreateCustomerDTO } from 'src/domain/DTOS/create-customer-dto';
import { CreateCustomer } from 'src/domain/use-cases/external/customers';

@Injectable()
export class CreateCustomerImplementation implements CreateCustomer {
  constructor(private readonly repository: CreateCustomerRepository) {}

  async create(customer: CreateCustomerDTO): Promise<void> {
    await this.repository.create(customer);
  }
}
