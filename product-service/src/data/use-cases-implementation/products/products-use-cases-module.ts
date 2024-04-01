import { Module } from '@nestjs/common';
import { ProductsRepositoriesModule } from 'src/infra/database/prisma/repositories/products/products-repositories-module';
import {
  CreateProduct,
  GetAllProducts,
  GetProductById,
  UpdateProduct,
} from 'src/domain/use-cases/products';
import {
  CreateProductImplementation,
  GetAllProductsImplementation,
  GetProductByIdImplementation,
  UpdateProductImplementation,
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
    {
      provide: UpdateProduct,
      useClass: UpdateProductImplementation,
    },
  ],
  exports: [CreateProduct, GetAllProducts, GetProductById, UpdateProduct],
})
export class ProductsUseCasesModule {}
