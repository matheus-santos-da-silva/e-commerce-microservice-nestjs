import { Module } from '@nestjs/common';
import { ProductsUseCasesModule } from 'src/data/use-cases-implementation/products/products-use-cases-module';
import { CreateProductController } from './create-product-controller';

@Module({
  imports: [ProductsUseCasesModule],
  controllers: [CreateProductController],
})
export class ProductsControllersModule {}
