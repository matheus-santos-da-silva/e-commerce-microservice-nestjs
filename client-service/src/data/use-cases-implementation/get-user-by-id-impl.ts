import { Injectable } from '@nestjs/common';
import { GetUserById } from 'src/domain/use-cases/get-user-by-id';
import { GetUserByIdRepository } from '../protocols';
import { User } from 'src/domain/models/user';

@Injectable()
export class GetUserByIdImplementation implements GetUserById {
  constructor(private readonly repository: GetUserByIdRepository) {}

  async getById(id: string): Promise<User> {
    const user = await this.repository.getById(id);
    return user;
  }
}
