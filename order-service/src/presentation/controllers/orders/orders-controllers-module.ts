import { Module } from '@nestjs/common';
import { OrdersExternalUseCasesModule } from 'src/data/use-cases-implementation/external/orders/orders-external-use-cases.module';
import { CreateOrderController } from './';
import { CustomersExternalUseCasesModule } from 'src/data/use-cases-implementation/external/customers/customers-external-use-cases-module';

@Module({
  imports: [OrdersExternalUseCasesModule, CustomersExternalUseCasesModule],
  controllers: [CreateOrderController],
})
export class OrdersControllersModule {}
