import { Module } from '@nestjs/common';
import { ProductsRepositoriesModule } from 'src/infra/database/prisma/repositories/products/products-repositories-module';
import {
  BuyProducts,
  CreateProduct,
  DeleteProduct,
  GetAllProducts,
  GetProductById,
  UpdateProduct,
} from 'src/domain/use-cases/products';
import {
  BuyProductImplementation,
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
    {
      provide: BuyProducts,
      useClass: BuyProductImplementation,
    },
  ],
  exports: [
    CreateProduct,
    GetAllProducts,
    GetProductById,
    UpdateProduct,
    DeleteProduct,
    BuyProducts,
  ],
})
export class ProductsUseCasesModule {}
