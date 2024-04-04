import { Injectable } from '@nestjs/common';
import { DeleteUser } from 'src/domain/use-cases';
import { DeleteUserRepository } from '../protocols';
import { PubSubService } from 'src/infra/messaging/redis/pubsub.service';

@Injectable()
export class DeleteUserImplementation implements DeleteUser {
  constructor(
    private readonly repository: DeleteUserRepository,
    private readonly messagingService: PubSubService,
  ) {}

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
    await this.messagingService.publish('delete-user', { id }, 'users');
  }
}
