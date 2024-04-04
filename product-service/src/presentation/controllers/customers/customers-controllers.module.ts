import { Module } from '@nestjs/common';
import { CreateCustomerController } from './create-customer-controller';
import { CustomersExternalUseCasesModule } from 'src/data/use-cases-implementation/external/customers-external-use-cases.module';
import { DeleteCustomerController } from './delete-customer-controller';

@Module({
  imports: [CustomersExternalUseCasesModule],
  controllers: [CreateCustomerController, DeleteCustomerController],
})
export class CustomersControllersModule {}
