import { Injectable } from '@nestjs/common';
import {
  CreateProductRepository,
  GetAllProductsRepository,
  GetProductByIdRepository,
  UpdateProductRepository,
} from 'src/data/protocols/products/';
import { CreateProductDTO } from 'src/domain/DTOS/create-product-dto';
import { Product } from 'src/domain/models/products/product';
import { PrismaService } from '../../config/prisma.service';
import { UpdateProductDTO } from 'src/domain/DTOS/update-product-dto';

@Injectable()
export class ProductPrismaRepository
  implements
    CreateProductRepository,
    GetAllProductsRepository,
    GetProductByIdRepository,
    UpdateProductRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, product: UpdateProductDTO): Promise<Product> {
    const updatedProduct = await this.prisma.product.update({
      where: { id },
      data: product,
    });

    return updatedProduct;
  }

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
