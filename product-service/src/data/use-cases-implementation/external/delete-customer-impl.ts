import { Injectable } from '@nestjs/common';
import { DeleteCustomerRepository } from 'src/data/protocols/customers/db-delete-customer';
import { DeleteCustomer } from 'src/domain/use-cases/external/delete-customer';

@Injectable()
export class DeleteCustomerImplementation implements DeleteCustomer {
  constructor(private readonly repository: DeleteCustomerRepository) {}

  async delete(data: { id: string }): Promise<void> {
    await this.repository.delete(data.id);
  }
}
