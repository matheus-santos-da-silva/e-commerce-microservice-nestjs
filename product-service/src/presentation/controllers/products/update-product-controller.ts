import {
  Body,
  Controller,
  Param,
  Patch,
  Headers,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiResponse,
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { GetProductById, UpdateProduct } from 'src/domain/use-cases/products';
import { ProductResponseViewModel } from './product-vm';
import {
  HttpNotFoundError,
  HttpUnauthorizedError,
} from 'src/presentation/swagger/http-errors';
import { UpdateProductVM } from 'src/presentation/view-models/update-product-vm';
import { ValidateAndReturnToken } from 'src/data/utils/validate-token';

@ApiTags('Products')
@Controller('products')
export class UpdateProductController {
  constructor(
    private readonly updateProduct: UpdateProduct,
    private readonly getProductById: GetProductById,
  ) {}

  @ApiOperation({ summary: 'Update Product' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: ProductResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiResponse(HttpUnauthorizedError)
  @ApiParam({ name: 'id', type: String })
  @ApiBearerAuth()
  @Patch(':id')
  async execute(
    @Param('id') id: string,
    @Body() product: UpdateProductVM,
    @Headers('Authorization') authorization: string,
  ): Promise<ProductResponseViewModel> {
    await ValidateAndReturnToken(authorization);
    const checkProduct = await this.getProductById.getById(id);
    if (!checkProduct) {
      throw new NotFoundException('Product was not found');
    }
    const updatedProduct = await this.updateProduct.update(id, product);
    return updatedProduct;
  }
}
