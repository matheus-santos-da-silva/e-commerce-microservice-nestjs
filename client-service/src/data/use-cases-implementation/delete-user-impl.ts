import { Injectable } from '@nestjs/common';
import { DeleteUser } from 'src/domain/use-cases';
import { DeleteUserRepository } from '../protocols';

@Injectable()
export class DeleteUserImplementation implements DeleteUser {
  constructor(private readonly repository: DeleteUserRepository) {}

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
