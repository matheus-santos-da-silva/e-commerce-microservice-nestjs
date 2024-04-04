import { Injectable } from '@nestjs/common';
import {
  BuyProductsRepository,
  CreateProductRepository,
  DeleteProductRepository,
  GetAllProductsRepository,
  GetProductByIdRepository,
  UpdateProductRepository,
  GetProductByCodeRepository,
} from 'src/data/protocols/products/';
import { CreateProductDTO } from 'src/domain/DTOS/create-product-dto';
import { Product } from 'src/domain/models/products/product';
import { PrismaService } from '../../config/prisma.service';
import { UpdateProductDTO } from 'src/domain/DTOS/update-product-dto';
import { BuyProductsDTO } from 'src/domain/DTOS/buy-products-dto';

@Injectable()
export class ProductPrismaRepository
  implements
    CreateProductRepository,
    GetAllProductsRepository,
    GetProductByIdRepository,
    UpdateProductRepository,
    DeleteProductRepository,
    BuyProductsRepository,
    GetProductByCodeRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async getByCode(code: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({ where: { code } });
    return product;
  }

  async buy({ products }: BuyProductsDTO): Promise<void> {
    for (const product of products) {
      const oldQuantity = await this.prisma.product.findFirst({
        where: { code: product.code },
      });

      await this.prisma.product.update({
        where: { code: product.code },
        data: { quantity: oldQuantity.quantity - product.quantity },
      });
    }
  }
  async checkProductsStock({ products }: BuyProductsDTO): Promise<boolean> {
    const checkProductsStock = products.map(async (product) => {
      const prod = await this.prisma.product.findFirst({
        where: { code: product.code },
      });
      return prod!.quantity >= product.quantity;
    });

    const results = await Promise.all(checkProductsStock);
    return !results.includes(false);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }

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
