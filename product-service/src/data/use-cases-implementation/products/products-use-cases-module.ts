import { Module } from '@nestjs/common';
import { ProductsRepositoriesModule } from 'src/infra/database/prisma/repositories/products/products-repositories-module';
import { CreateProduct, GetAllProducts } from 'src/domain/use-cases/products';
import { CreateProductImplementation, GetAllProductsImplementation } from './';

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
  ],
  exports: [CreateProduct, GetAllProducts],
})
export class ProductsUseCasesModule {}
