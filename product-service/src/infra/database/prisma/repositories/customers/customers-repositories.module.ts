import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import { CreateCustomerRepository } from 'src/data/protocols/customers/db-create-customer';
import { CustomersPrismaRepository } from './customers-prisma-repository';
import { DeleteCustomerRepository } from 'src/data/protocols/customers/db-delete-customer';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateCustomerRepository,
      useClass: CustomersPrismaRepository,
    },
    {
      provide: DeleteCustomerRepository,
      useClass: CustomersPrismaRepository,
    },
  ],
  exports: [CreateCustomerRepository, DeleteCustomerRepository],
})
export class CustomersRepositoriesModule {}
