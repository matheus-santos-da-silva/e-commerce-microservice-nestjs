import { Module } from '@nestjs/common';
import { UsersUseCasesModule } from 'src/data/use-cases-implementation/users-use-cases-module';
import {
  CreateUserController,
  DeleteUserController,
  GetAllUsersController,
  GetUserByIdController,
  SignInUserController,
  UpdateUserController,
} from './';

@Module({
  imports: [UsersUseCasesModule],
  controllers: [
    CreateUserController,
    GetAllUsersController,
    UpdateUserController,
    DeleteUserController,
    SignInUserController,
    GetUserByIdController,
  ],
})
export class UsersControllersModule {}
