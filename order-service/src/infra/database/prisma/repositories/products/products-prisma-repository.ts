import {
  CreateProductRepository,
  GetProductByCodeRepository,
} from 'src/data/protocols/products';
import { PrismaService } from '../../config/prisma.service';
import { Product } from 'src/domain/models/products/product';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsPrismaRepository
  implements CreateProductRepository, GetProductByCodeRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async getByCode(code: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({ where: { code } });
    return product;
  }

  async create(product: Product): Promise<Product> {
    const newProduct = await this.prisma.product.create({
      data: {
        code: product.code,
        name: product.name,
        price: product.price,
      },
    });

    return newProduct;
  }
}
