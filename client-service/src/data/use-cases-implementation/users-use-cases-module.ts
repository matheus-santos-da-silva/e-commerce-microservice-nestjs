import { Module } from '@nestjs/common';
import { CreateUser, GetAllUsers, UpdateUser } from 'src/domain/use-cases/';
import { UserRepositoryModule } from 'src/infra/database/prisma/repositories/users-repositories.module';
import {
  CreateUserImplementation,
  GetAllUsersImplementation,
  UpdateUserImplementation,
} from './';

@Module({
  imports: [UserRepositoryModule],
  providers: [
    {
      provide: CreateUser,
      useClass: CreateUserImplementation,
    },
    {
      provide: GetAllUsers,
      useClass: GetAllUsersImplementation,
    },
    {
      provide: UpdateUser,
      useClass: UpdateUserImplementation,
    },
  ],
  exports: [CreateUser, GetAllUsers, UpdateUser],
})
export class UsersUseCasesModule {}
