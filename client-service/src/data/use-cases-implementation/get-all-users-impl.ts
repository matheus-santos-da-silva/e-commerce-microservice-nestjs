import { Injectable } from '@nestjs/common';
import { GetAllUsersRepository } from '../protocols/db-get-all-users';
import { User } from 'src/domain/models/user';

@Injectable()
export class GetAllUsersImplementation {
  constructor(private repository: GetAllUsersRepository) {}

  async getAll(): Promise<User[]> {
    const users = await this.repository.getAll();
    return users;
  }
}
