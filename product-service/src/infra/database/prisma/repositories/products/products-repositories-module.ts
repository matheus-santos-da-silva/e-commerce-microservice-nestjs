import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import {
  CreateProductRepository,
  GetAllProductsRepository,
  GetProductByIdRepository,
  UpdateProductRepository,
} from 'src/data/protocols/products';
import { ProductPrismaRepository } from './products-prisma-repository';

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
  ],
  exports: [
    CreateProductRepository,
    GetAllProductsRepository,
    GetProductByIdRepository,
    UpdateProductRepository,
  ],
})
export class ProductsRepositoriesModule {}
