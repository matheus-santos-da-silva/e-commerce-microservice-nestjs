import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import {
  CreateCustomerRepository,
  GetCustomerByIdRepository,
} from 'src/data/protocols/customers';
import { CustomersPrismaRepository } from './customers-prisma-repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateCustomerRepository,
      useClass: CustomersPrismaRepository,
    },
    {
      provide: GetCustomerByIdRepository,
      useClass: CustomersPrismaRepository,
    },
  ],
  exports: [CreateCustomerRepository, GetCustomerByIdRepository],
})
export class CustomersRepositoriesModule {}
