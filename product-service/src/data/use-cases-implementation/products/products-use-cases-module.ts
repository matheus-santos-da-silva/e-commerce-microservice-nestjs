import { Module } from '@nestjs/common';
import { ProductsRepositoriesModule } from 'src/infra/database/prisma/repositories/products/products-repositories-module';
import {
  CreateProduct,
  DeleteProduct,
  GetAllProducts,
  GetProductById,
  UpdateProduct,
} from 'src/domain/use-cases/products';
import {
  CreateProductImplementation,
  DeleteProductImplementation,
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
    {
      provide: DeleteProduct,
      useClass: DeleteProductImplementation,
    },
  ],
  exports: [
    CreateProduct,
    GetAllProducts,
    GetProductById,
    UpdateProduct,
    DeleteProduct,
  ],
})
export class ProductsUseCasesModule {}
