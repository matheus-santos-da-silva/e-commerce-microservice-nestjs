import { Module } from '@nestjs/common';
import { ProductsUseCasesModule } from 'src/data/use-cases-implementation/products/products-use-cases-module';
import {
  CreateProductController,
  GetAllProductsController,
  GetProductByIdController,
} from './';

@Module({
  imports: [ProductsUseCasesModule],
  controllers: [
    CreateProductController,
    GetAllProductsController,
    GetProductByIdController,
  ],
})
export class ProductsControllersModule {}
