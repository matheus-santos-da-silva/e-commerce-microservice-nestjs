import { Module } from '@nestjs/common';
import { ProductsControllersModule } from './presentation/controllers/products/products-controllers.module';
import { ConfigModule } from '@nestjs/config';
import { PubSubModule } from './infra/messaging/redis/pubsub.module';
import { CustomersControllersModule } from './presentation/controllers/customers/customers-controllers.module';

@Module({
  imports: [
    ProductsControllersModule,
    CustomersControllersModule,
    ConfigModule.forRoot(),
    PubSubModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
