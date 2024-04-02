import { CreateCustomerRepository } from 'src/data/protocols/customer/db-create-customer';
import { CreateCustomerDTO } from 'src/domain/DTOS/create-customer-dto';
import { PrismaService } from '../../config/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersPrismaRepository implements CreateCustomerRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateCustomerDTO): Promise<void> {
    await this.prisma.customer.create({ data });
  }
}
