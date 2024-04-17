import { Module } from '@nestjs/common';
import { CreateOrder } from 'src/domain/use-cases/external/orders';
import { CreateOrderImplementation } from './create-order-impl';
import { OrdersRepositoriesModule } from 'src/infra/database/prisma/repositories/orders/orders-repositories.module';

@Module({
  imports: [OrdersRepositoriesModule],
  providers: [
    {
      provide: CreateOrder,
      useClass: CreateOrderImplementation,
    },
  ],
  exports: [CreateOrder],
})
export class OrdersExternalUseCasesModule {}
