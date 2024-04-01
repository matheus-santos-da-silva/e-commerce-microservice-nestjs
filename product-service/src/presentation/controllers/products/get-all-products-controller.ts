import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllProducts } from 'src/domain/use-cases/products';
import { ProductResponseViewModel } from './product-vm';

@ApiTags('Products')
@Controller('products')
export class GetAllProductsController {
  constructor(private readonly getAllProducts: GetAllProducts) {}

  @ApiOperation({ summary: 'Get All Products' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ProductResponseViewModel,
    isArray: true,
  })
  @Get()
  async execute(): Promise<ProductResponseViewModel[]> {
    const products = await this.getAllProducts.getAll();

    const payload: ProductResponseViewModel[] = [];
    for (const product of products) {
      payload.push(ProductResponseViewModel.toViewModel(product));
    }

    return payload;
  }
}
