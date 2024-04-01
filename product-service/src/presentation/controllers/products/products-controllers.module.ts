import { Module } from '@nestjs/common';
import { ProductsUseCasesModule } from 'src/data/use-cases-implementation/products/products-use-cases-module';
import { CreateProductController, GetAllProductsController } from './';

@Module({
  imports: [ProductsUseCasesModule],
  controllers: [CreateProductController, GetAllProductsController],
})
export class ProductsControllersModule {}
