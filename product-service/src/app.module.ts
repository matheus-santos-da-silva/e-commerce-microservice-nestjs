import { Module } from '@nestjs/common';
import { ProductsControllersModule } from './presentation/controllers/products/products-controllers.module';

@Module({
  imports: [ProductsControllersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
