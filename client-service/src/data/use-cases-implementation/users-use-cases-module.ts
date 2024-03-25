import { Module } from '@nestjs/common';
import {
  CreateUser,
  DeleteUser,
  GetAllUsers,
  UpdateUser,
  SignInUser,
  GetUserById,
} from 'src/domain/use-cases/';
import { UserRepositoryModule } from 'src/infra/database/prisma/repositories/users-repositories.module';
import {
  CreateUserImplementation,
  GetAllUsersImplementation,
  UpdateUserImplementation,
  DeleteUserImplementation,
  SignInUserImplementation,
  GetUserByIdImplementation,
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
    {
      provide: SignInUser,
      useClass: SignInUserImplementation,
    },
    {
      provide: GetUserById,
      useClass: GetUserByIdImplementation,
    },
  ],
  exports: [
    CreateUser,
    GetAllUsers,
    UpdateUser,
    DeleteUser,
    SignInUser,
    GetUserById,
  ],
})
export class UsersUseCasesModule {}
