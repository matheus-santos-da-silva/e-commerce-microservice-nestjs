import { CreateUserDTO } from 'src/domain/DTOS/create-user-dto';
import { User } from 'src/domain/models/user';
import { CreateUserRepository } from '../protocols/db-create-user';
import { CreateUser } from 'src/domain/use-cases/';
import { Injectable } from '@nestjs/common';
import { encryptingPass } from '../utils/encrypt-pass';

@Injectable()
export class CreateUserImplementation implements CreateUser {
  constructor(private readonly repository: CreateUserRepository) {}

  async create({ email, name, password, phone }: CreateUserDTO): Promise<User> {
    await this.repository.findUserByEmail(email);
    await this.repository.findUserByPhone(phone);

    const hashPassword = await encryptingPass(password);

    const user = await this.repository.create({
      email,
      name,
      password: hashPassword,
      phone,
    });

    return user;
  }
}
