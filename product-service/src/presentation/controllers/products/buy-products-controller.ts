import { Body, Controller, Post, Headers, HttpCode } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ValidateAndReturnToken } from 'src/data/utils/validate-token';
import { BuyProducts } from 'src/domain/use-cases/products';
import {
  HttpNotFoundError,
  HttpUnauthorizedError,
} from 'src/presentation/swagger/http-errors';
import { BuyProductsVM } from 'src/presentation/view-models/buy-products-vm';

@ApiTags('Products')
@Controller('products')
export class BuyProductsController {
  constructor(private readonly buyProducts: BuyProducts) {}

  @ApiOperation({ summary: 'Buy Products' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpUnauthorizedError)
  @ApiResponse(HttpNotFoundError)
  @ApiBearerAuth()
  @Post('buy')
  @HttpCode(200)
  async execute(
    @Body()
    { products, paymentType }: BuyProductsVM,
    @Headers('Authorization') authorization: string,
  ): Promise<void> {
    const id = await ValidateAndReturnToken(authorization);
    await this.buyProducts.buy({ products, customerId: id, paymentType });
  }
}
