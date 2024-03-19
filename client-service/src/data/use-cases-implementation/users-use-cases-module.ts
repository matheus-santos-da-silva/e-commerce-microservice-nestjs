import { Module } from '@nestjs/common';
import { CreateUser, GetAllUsers } from 'src/domain/use-cases/';
import { UserRepositoryModule } from 'src/infra/database/prisma/repositories/users-repositories.module';
import { CreateUserImplementation, GetAllUsersImplementation } from './';

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
  ],
  exports: [CreateUser, GetAllUsers],
})
export class UsersUseCasesModule {}
