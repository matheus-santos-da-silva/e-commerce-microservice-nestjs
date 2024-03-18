import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserRepository } from 'src/data/protocols';
import { CreateUserDTO } from 'src/domain/DTOS/create-user-dto';
import { User } from 'src/domain/models/user';
import { PrismaService } from '../config/prisma.service';

@Injectable()
export class UsersPrismaRepository implements CreateUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (user) throw new ConflictException('This email is already in use');
    return user;
  }

  async findUserByPhone(phone: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        phone,
      },
    });

    if (user) throw new ConflictException('This phone is already in use');
    return user;
  }

  async create({ email, name, password, phone }: CreateUserDTO): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        password,
        phone,
      },
    });

    return user;
  }
}
