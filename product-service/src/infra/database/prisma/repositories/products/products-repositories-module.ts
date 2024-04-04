import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import {
  BuyProductsRepository,
  CreateProductRepository,
  DeleteProductRepository,
  GetAllProductsRepository,
  GetProductByIdRepository,
  UpdateProductRepository,
} from 'src/data/protocols/products';
import { ProductPrismaRepository } from './products-prisma-repository';
import { GetProductByCodeRepository } from 'src/data/protocols/products/db-get-product-by-code';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateProductRepository,
      useClass: ProductPrismaRepository,
    },
    {
      provide: GetAllProductsRepository,
      useClass: ProductPrismaRepository,
    },
    {
      provide: GetProductByIdRepository,
      useClass: ProductPrismaRepository,
    },
    {
      provide: UpdateProductRepository,
      useClass: ProductPrismaRepository,
    },
    {
      provide: DeleteProductRepository,
      useClass: ProductPrismaRepository,
    },
    {
      provide: BuyProductsRepository,
      useClass: ProductPrismaRepository,
    },
    {
      provide: GetProductByCodeRepository,
      useClass: ProductPrismaRepository,
    },
  ],
  exports: [
    CreateProductRepository,
    GetAllProductsRepository,
    GetProductByIdRepository,
    UpdateProductRepository,
    DeleteProductRepository,
    BuyProductsRepository,
    GetProductByCodeRepository,
  ],
})
export class ProductsRepositoriesModule {}
