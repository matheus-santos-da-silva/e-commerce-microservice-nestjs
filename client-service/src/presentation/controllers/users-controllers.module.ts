import { Module } from '@nestjs/common';
import { UsersUseCasesModule } from 'src/data/use-cases-implementation/users-use-cases-module';
import { CreateUserController } from './create-user-controller';

@Module({
  imports: [UsersUseCasesModule],
  controllers: [CreateUserController],
})
export class UsersControllersModule {}
