import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { DeleteCustomer } from 'src/domain/use-cases/external/delete-customer';

@Controller()
export class DeleteCustomerController {
  constructor(private readonly repository: DeleteCustomer) {}

  @MessagePattern('users-delete-user')
  async delete(data: { id: string }): Promise<void> {
    await this.repository.delete(data);
  }
}
