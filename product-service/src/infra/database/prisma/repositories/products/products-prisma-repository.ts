import { Injectable } from '@nestjs/common';
import { CreateProductRepository } from 'src/data/protocols/products/';
import { CreateProductDTO } from 'src/domain/DTOS/create-product-dto';
import { Product } from 'src/domain/models/products/product';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class ProductPrismaRepository implements CreateProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(product: CreateProductDTO): Promise<Product> {
    const newProduct = await this.prisma.product.create({
      data: product,
    });

    return newProduct;
  }
}
