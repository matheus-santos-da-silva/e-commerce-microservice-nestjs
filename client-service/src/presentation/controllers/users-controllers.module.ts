import { Module } from '@nestjs/common';
import { UsersUseCasesModule } from 'src/data/use-cases-implementation/users-use-cases-module';
import {
  CreateUserController,
  DeleteUserController,
  GetAllUsersController,
  UpdateUserController,
} from './';

@Module({
  imports: [UsersUseCasesModule],
  controllers: [
    CreateUserController,
    GetAllUsersController,
    UpdateUserController,
    DeleteUserController,
  ],
})
export class UsersControllersModule {}
