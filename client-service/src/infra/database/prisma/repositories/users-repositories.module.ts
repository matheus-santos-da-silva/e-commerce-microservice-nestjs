import { Module } from '@nestjs/common';
import { PrismaModule } from '../config/prisma.module';
import { CreateUserRepository } from '../../../../data/protocols/index';
import { UsersPrismaRepository } from './user-prisma-repository';
import { GetAllUsersRepository } from 'src/data/protocols/db-get-all-users';

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
  ],
  exports: [CreateUserRepository, GetAllUsersRepository],
})
export class UserRepositoryModule {}
