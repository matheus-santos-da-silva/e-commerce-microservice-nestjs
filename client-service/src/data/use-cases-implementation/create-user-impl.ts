import { CreateUserDTO } from 'src/domain/DTOS/create-user-dto';
import { User } from 'src/domain/models/user';
import { CreateUserRepository } from '../protocols/db-create-user';
import { CreateUser } from 'src/domain/use-cases/';
import { ConflictException, Injectable } from '@nestjs/common';
import { encryptingPass } from '../utils/encrypt-pass';
import { GetUserByFieldsRepository } from '../protocols';
import { PubSubService } from 'src/infra/messaging/redis/pubsub.service';

@Injectable()
export class CreateUserImplementation implements CreateUser {
  constructor(
    private readonly repository: CreateUserRepository,
    private readonly getUserRepository: GetUserByFieldsRepository,
    private readonly messagingService: PubSubService,
  ) {}

  async create({ email, name, password, phone }: CreateUserDTO): Promise<User> {
    const checkUserEmail = await this.getUserRepository.getUserByEmail(email);
    const checkUserPhone = await this.getUserRepository.getUserByPhone(phone);

    if (checkUserEmail)
      throw new ConflictException('This email is already in use');
    if (checkUserPhone)
      throw new ConflictException('This phone is already in use');

    const hashPassword = await encryptingPass(password);

    const user = await this.repository.create({
      email,
      name,
      password: hashPassword,
      phone,
    });

    await this.messagingService.publish(
      'create-user',
      {
        email: user.email,
        id: user.id,
      },
      'users',
    );

    return user;
  }
}
