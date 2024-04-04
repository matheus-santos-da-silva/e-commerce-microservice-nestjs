import { CreateCustomerRepository } from 'src/data/protocols/customers/db-create-customer';
import { CreateCustomerDTO } from 'src/domain/DTOS/create-customer-dto';
import { PrismaService } from '../../config/prisma.service';
import { Injectable } from '@nestjs/common';
import { DeleteCustomerRepository } from 'src/data/protocols/customers/db-delete-customer';

@Injectable()
export class CustomersPrismaRepository
  implements CreateCustomerRepository, DeleteCustomerRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string): Promise<void> {
    await this.prisma.customer.delete({ where: { id } });
  }

  async create(data: CreateCustomerDTO): Promise<void> {
    await this.prisma.customer.create({ data });
  }
}
