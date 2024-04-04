import { Module } from '@nestjs/common';
import { ProductsUseCasesModule } from 'src/data/use-cases-implementation/products/products-use-cases-module';
import {
  BuyProductsController,
  CreateProductController,
  DeleteProductController,
  GetAllProductsController,
  GetProductByIdController,
  UpdateProductController,
} from './';

@Module({
  imports: [ProductsUseCasesModule],
  controllers: [
    CreateProductController,
    GetAllProductsController,
    GetProductByIdController,
    UpdateProductController,
    DeleteProductController,
    BuyProductsController,
  ],
})
export class ProductsControllersModule {}
