import { Module } from '@nestjs/common';
import { CreateProductController } from './';
import { ProductsExternalUseCasesModule } from 'src/data/use-cases-implementation/external/products/products-external-use-cases-module';

@Module({
  imports: [ProductsExternalUseCasesModule],
  controllers: [CreateProductController],
})
export class ProductsControllersModule {}
