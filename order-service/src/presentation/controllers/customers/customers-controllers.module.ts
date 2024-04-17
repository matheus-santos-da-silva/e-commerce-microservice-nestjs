import { Module } from '@nestjs/common';
import { CreateCustomerController } from './create-customer-controller';
import { CustomersExternalUseCasesModule } from 'src/data/use-cases-implementation/external/customers/customers-external-use-cases-module';

@Module({
  imports: [CustomersExternalUseCasesModule],
  controllers: [CreateCustomerController],
})
export class CustomersControllersModule {}
