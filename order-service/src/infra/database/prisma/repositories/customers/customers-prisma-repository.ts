import {
  CreateCustomerRepository,
  GetCustomerByIdRepository,
} from 'src/data/protocols/customers';
import { PrismaService } from '../../config/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDTO } from 'src/domain/DTOS/create-customer-dto';
import { Customer } from 'src/domain/models/customers/customer';

@Injectable()
export class CustomersPrismaRepository
  implements CreateCustomerRepository, GetCustomerByIdRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: string): Promise<Omit<Customer, 'order'>> {
    const customer = await this.prisma.customer.findFirst({ where: { id } });
    return customer;
  }

  async create(customer: CreateCustomerDTO): Promise<void> {
    await this.prisma.customer.create({ data: customer });
  }
}
