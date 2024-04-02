import { Module } from '@nestjs/common';
import { CreateCustomer } from 'src/domain/use-cases/external/create-customer';
import { CreateCustomerImplementation } from './create-customer-impl';
import { CustomersRepositoriesModule } from 'src/infra/database/prisma/repositories/customers/customers-repositories.module';

@Module({
  imports: [CustomersRepositoriesModule],
  providers: [
    {
      provide: CreateCustomer,
      useClass: CreateCustomerImplementation,
    },
  ],
  exports: [CreateCustomer],
})
export class CustomersExternalUseCasesModule {}
