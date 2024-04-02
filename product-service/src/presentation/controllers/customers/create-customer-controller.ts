import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCustomerDTO } from 'src/domain/DTOS/create-customer-dto';
import { CreateCustomer } from 'src/domain/use-cases/external/create-customer';

@Controller()
export class CreateCustomerController {
  constructor(private readonly createCustomer: CreateCustomer) {}

  @MessagePattern('users-create-user')
  async create(data: CreateCustomerDTO) {
    await this.createCustomer.create(data);
  }
}
