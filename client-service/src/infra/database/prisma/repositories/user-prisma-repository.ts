import { Injectable } from '@nestjs/common';
import { CreateUserRepository } from 'src/data/protocols';
import { CreateUserDTO } from 'src/domain/DTOS/create-user-dto';
import { User } from 'src/domain/models/user';
import { PrismaService } from '../config/prisma.service';

@Injectable()
export class UsersPrismaRepository implements CreateUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create({ email, name, password, phone }: CreateUserDTO): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          name,
          password,
          phone,
        },
      });

      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
