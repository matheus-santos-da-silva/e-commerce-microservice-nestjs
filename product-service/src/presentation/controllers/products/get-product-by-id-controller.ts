import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetProductById } from 'src/domain/use-cases/products';
import { ProductResponseViewModel } from './product-vm';
import { HttpNotFoundError } from 'src/presentation/swagger/http-errors';

@ApiTags('Products')
@Controller('products')
export class GetProductByIdController {
  constructor(private readonly getProductById: GetProductById) {}

  @ApiOperation({ summary: 'Get Product By Id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ProductResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async execute(@Param('id') id: string): Promise<ProductResponseViewModel> {
    const product = await this.getProductById.getById(id);
    if (!product) {
      throw new NotFoundException('Product was not found');
    }

    return product;
  }
}
