import { Module } from '@nestjs/common';
import { UsersUseCasesModule } from 'src/data/use-cases-implementation/users-use-cases-module';
import { CreateUserController } from './create-user-controller';
import { GetAllUsersController } from './get-all-users-controller';

@Module({
  imports: [UsersUseCasesModule],
  controllers: [CreateUserController, GetAllUsersController],
})
export class UsersControllersModule {}
