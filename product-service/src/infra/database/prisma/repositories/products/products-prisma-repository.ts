import { Injectable } from '@nestjs/common';
import {
  CreateProductRepository,
  GetAllProductsRepository,
  GetProductByIdRepository,
} from 'src/data/protocols/products/';
import { CreateProductDTO } from 'src/domain/DTOS/create-product-dto';
import { Product } from 'src/domain/models/products/product';
import { PrismaService } from '../../config/prisma.service';

@Injectable()
export class ProductPrismaRepository
  implements
    CreateProductRepository,
    GetAllProductsRepository,
    GetProductByIdRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({
      where: { id },
    });

    return product;
  }

  async getAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }

  async create(product: CreateProductDTO): Promise<Product> {
    const newProduct = await this.prisma.product.create({
      data: product,
    });

    return newProduct;
  }
}
