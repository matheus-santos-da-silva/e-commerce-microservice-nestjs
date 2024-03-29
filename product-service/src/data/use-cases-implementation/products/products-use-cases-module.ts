import { Module } from '@nestjs/common';
import { ProductsRepositoriesModule } from 'src/infra/database/prisma/repositories/products/products-repositories-module';
import { CreateProduct } from 'src/domain/use-cases/products';
import { CreateProductImplementation } from './';

@Module({
  imports: [ProductsRepositoriesModule],
  providers: [
    {
      provide: CreateProduct,
      useClass: CreateProductImplementation,
    },
  ],
  exports: [CreateProduct],
})
export class ProductsUseCasesModule {}
