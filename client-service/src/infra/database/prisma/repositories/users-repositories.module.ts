import { Module } from '@nestjs/common';
import { PrismaModule } from '../config/prisma.module';
import {
  CreateUserRepository,
  UpdateUserRepository,
  GetAllUsersRepository,
} from '../../../../data/protocols/index';
import { UsersPrismaRepository } from './user-prisma-repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateUserRepository,
      useClass: UsersPrismaRepository,
    },
    {
      provide: GetAllUsersRepository,
      useClass: UsersPrismaRepository,
    },
    {
      provide: UpdateUserRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [CreateUserRepository, GetAllUsersRepository, UpdateUserRepository],
})
export class UserRepositoryModule {}
