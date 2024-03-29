import { Module } from '@nestjs/common';
import { PrismaModule } from '../../config/prisma.module';
import { CreateProductRepository } from 'src/data/protocols/products';
import { ProductPrismaRepository } from './products-prisma-repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateProductRepository,
      useClass: ProductPrismaRepository,
    },
  ],
  exports: [CreateProductRepository],
})
export class ProductsRepositoriesModule {}
