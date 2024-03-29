import { Controller, Post, Body, Headers } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProduct } from 'src/domain/use-cases/products';
import { CreateProductVM } from 'src/presentation/view-models/create-product-vm';
import { ProductResponseViewModel } from './product-vm';
import {
  HttpBadRequestError,
  HttpConflictError,
} from 'src/presentation/swagger/http-errors';
import { ValidateAndReturnToken } from 'src/data/utils/validate-token';
import { generateProductCode } from 'src/data/utils/generate-product-code';

@ApiTags('Products')
@Controller('products')
export class CreateProductController {
  constructor(private readonly createProduct: CreateProduct) {}

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: ProductResponseViewModel,
  })
  @ApiResponse(HttpBadRequestError)
  @ApiResponse(HttpConflictError)
  @ApiBearerAuth()
  @Post('create')
  async execute(
    @Body() product: CreateProductVM,
    @Headers('Authorization') authorization: string,
  ): Promise<ProductResponseViewModel> {
    const ownerId = await ValidateAndReturnToken(authorization);
    const code = generateProductCode();
    const newProduct = await this.createProduct.create({
      ownerId,
      code,
      ...product,
    });
    return ProductResponseViewModel.toViewModel(newProduct);
  }
}
