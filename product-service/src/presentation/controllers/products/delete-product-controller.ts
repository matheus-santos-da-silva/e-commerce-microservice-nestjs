import {
  Controller,
  Delete,
  Param,
  Headers,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ValidateAndReturnToken } from 'src/data/utils/validate-token';
import { DeleteProduct, GetProductById } from 'src/domain/use-cases/products';
import {
  HttpNotFoundError,
  HttpUnauthorizedError,
} from 'src/presentation/swagger/http-errors';

@ApiTags('Products')
@Controller('products')
export class DeleteProductController {
  constructor(
    private readonly deleteProduct: DeleteProduct,
    private readonly getProductById: GetProductById,
  ) {}

  @ApiOperation({ summary: 'Delete Product' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpNotFoundError)
  @ApiResponse(HttpUnauthorizedError)
  @ApiParam({ name: 'id', type: String })
  @ApiBearerAuth()
  @Delete(':id')
  async execute(
    @Param('id') id: string,
    @Headers('Authorization') authorization: string,
  ): Promise<void> {
    const accountOwnerId = await ValidateAndReturnToken(authorization);
    const product = await this.getProductById.getById(id);
    if (!product) {
      throw new NotFoundException('Product was not found');
    }
    if (product.ownerId !== accountOwnerId) {
      throw new UnauthorizedException('This product is not yours');
    }

    await this.deleteProduct.delete(id);
  }
}
