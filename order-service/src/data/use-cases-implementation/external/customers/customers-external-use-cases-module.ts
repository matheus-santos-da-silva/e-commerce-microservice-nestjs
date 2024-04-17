import { Module } from '@nestjs/common';
import {
  CreateCustomer,
  GetCustomerById,
} from 'src/domain/use-cases/external/customers';
import { CreateCustomerImplementation } from './create-customer-impl';
import { CustomersRepositoriesModule } from 'src/infra/database/prisma/repositories/customers/customers-repositories.module';
import { GetCustomerByIdImplementation } from './get-customer-by-id-impl';

@Module({
  imports: [CustomersRepositoriesModule],
  providers: [
    {
      provide: CreateCustomer,
      useClass: CreateCustomerImplementation,
    },
    {
      provide: GetCustomerById,
      useClass: GetCustomerByIdImplementation,
    },
  ],
  exports: [CreateCustomer, GetCustomerById],
})
export class CustomersExternalUseCasesModule {}
