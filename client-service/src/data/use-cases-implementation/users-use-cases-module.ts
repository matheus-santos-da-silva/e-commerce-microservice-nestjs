import { Module } from '@nestjs/common';
import {
  CreateUser,
  DeleteUser,
  GetAllUsers,
  UpdateUser,
} from 'src/domain/use-cases/';
import { UserRepositoryModule } from 'src/infra/database/prisma/repositories/users-repositories.module';
import {
  CreateUserImplementation,
  GetAllUsersImplementation,
  UpdateUserImplementation,
  DeleteUserImplementation,
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
    {
      provide: DeleteUser,
      useClass: DeleteUserImplementation,
    },
  ],
  exports: [CreateUser, GetAllUsers, UpdateUser, DeleteUser],
})
export class UsersUseCasesModule {}
