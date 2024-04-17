import { Module } from '@nestjs/common';
import { CreateProduct } from 'src/domain/use-cases/external/products';
import { CreateProductImplementation } from './create-product-impl';
import { ProductsRepositoriesModule } from 'src/infra/database/prisma/repositories/products/products-repositories.module';

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
export class ProductsExternalUseCasesModule {}
