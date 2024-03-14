import { CreateUserDTO } from 'src/domain/DTOS/create-user-dto';
import { User } from 'src/domain/models/user';
import { CreateUserRepository } from '../protocols/db-create-user';
import { CreateUser } from 'src/domain/use-cases/';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserImplementation implements CreateUser {
  constructor(private readonly repository: CreateUserRepository) {}

  async create({ email, name, password, phone }: CreateUserDTO): Promise<User> {
    try {
      const user = await this.repository.create({
        email,
        name,
        password,
        phone,
      });

      return user;
    } catch (error) {
      throw error;
    }
  }
}
