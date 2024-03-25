import { ConflictException, Injectable } from '@nestjs/common';
import {
  CreateUserRepository,
  DeleteUserRepository,
  GetAllUsersRepository,
  GetUserByFieldsRepository,
  GetUserByIdRepository,
  UpdateUserRepository,
} from 'src/data/protocols';
import { CreateUserDTO } from 'src/domain/DTOS/create-user-dto';
import { User } from 'src/domain/models/user';
import { PrismaService } from '../config/prisma.service';
import { UpdateUserDTO } from 'src/domain/DTOS/update-user-dto';

@Injectable()
export class UsersPrismaRepository
  implements
    CreateUserRepository,
    GetAllUsersRepository,
    UpdateUserRepository,
    DeleteUserRepository,
    GetUserByFieldsRepository,
    GetUserByIdRepository
{
  constructor(private readonly prisma: PrismaService) {}

  async getById(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { id },
    });

    return user;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (!user) return null;
    return user;
  }

  async getUserByPhone(phone: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { phone },
    });

    if (!user) return null;
    return user;
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    });
  }

  async update(id: string, user: UpdateUserDTO): Promise<User> {
    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: user,
    });

    return updatedUser;
  }

  async getAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany({});
    return users;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });

    if (user) throw new ConflictException('This email is already in use');
    return user;
  }

  async findUserByPhone(phone: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { phone },
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
