import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import { CreateCustomerRepository } from 'src/data/protocols/customer/db-create-customer';
import { CustomersPrismaRepository } from './customers-prisma-repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateCustomerRepository,
      useClass: CustomersPrismaRepository,
    },
  ],
  exports: [CreateCustomerRepository],
})
export class CustomersRepositoriesModule {}
