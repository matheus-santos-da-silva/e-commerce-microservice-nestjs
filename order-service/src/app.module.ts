import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PubSubModule } from './infra/messaging/redis/pubsub.module';
import { OrdersControllersModule } from './presentation/controllers/orders/orders-controllers-module';
import { CustomersControllersModule } from './presentation/controllers/customers/customers-controllers.module';
import { ProductsControllersModule } from './presentation/controllers/products/products-controllers.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PubSubModule,
    OrdersControllersModule,
    CustomersControllersModule,
    ProductsControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
