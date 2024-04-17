import { Injectable } from '@nestjs/common';
import { GetCustomerByIdRepository } from 'src/data/protocols/customers';
import { Customer } from 'src/domain/models/customers/customer';
import { GetCustomerById } from 'src/domain/use-cases/external/customers';

@Injectable()
export class GetCustomerByIdImplementation implements GetCustomerById {
  constructor(private readonly repository: GetCustomerByIdRepository) {}

  async getById(id: string): Promise<Omit<Customer, 'order'>> {
    const customer = await this.repository.getById(id);
    return customer;
  }
}
