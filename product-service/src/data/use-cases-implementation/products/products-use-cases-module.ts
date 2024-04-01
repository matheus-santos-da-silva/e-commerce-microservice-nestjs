import { Module } from '@nestjs/common';
import { ProductsRepositoriesModule } from 'src/infra/database/prisma/repositories/products/products-repositories-module';
import {
  CreateProduct,
  GetAllProducts,
  GetProductById,
} from 'src/domain/use-cases/products';
import {
  CreateProductImplementation,
  GetAllProductsImplementation,
  GetProductByIdImplementation,
} from './';

@Module({
  imports: [ProductsRepositoriesModule],
  providers: [
    {
      provide: CreateProduct,
      useClass: CreateProductImplementation,
    },
    {
      provide: GetAllProducts,
      useClass: GetAllProductsImplementation,
    },
    {
      provide: GetProductById,
      useClass: GetProductByIdImplementation,
    },
  ],
  exports: [CreateProduct, GetAllProducts, GetProductById],
})
export class ProductsUseCasesModule {}
