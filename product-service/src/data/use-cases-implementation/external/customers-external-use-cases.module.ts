import { Module } from '@nestjs/common';
import { CreateCustomer } from 'src/domain/use-cases/external/create-customer';
import { CreateCustomerImplementation } from './create-customer-impl';
import { CustomersRepositoriesModule } from 'src/infra/database/prisma/repositories/customers/customers-repositories.module';
import { DeleteCustomer } from 'src/domain/use-cases/external/delete-customer';
import { DeleteCustomerImplementation } from './delete-customer-impl';

@Module({
  imports: [CustomersRepositoriesModule],
  providers: [
    {
      provide: CreateCustomer,
      useClass: CreateCustomerImplementation,
    },
    {
      provide: DeleteCustomer,
      useClass: DeleteCustomerImplementation,
    },
  ],
  exports: [CreateCustomer, DeleteCustomer],
})
export class CustomersExternalUseCasesModule {}
