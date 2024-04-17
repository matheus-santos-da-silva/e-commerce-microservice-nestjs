import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import {
  CreateProductRepository,
  GetProductByCodeRepository,
} from 'src/data/protocols/products';
import { ProductsPrismaRepository } from './products-prisma-repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateProductRepository,
      useClass: ProductsPrismaRepository,
    },
    {
      provide: GetProductByCodeRepository,
      useClass: ProductsPrismaRepository,
    },
  ],
  exports: [CreateProductRepository, GetProductByCodeRepository],
})
export class ProductsRepositoriesModule {}
