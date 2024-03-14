import { Module } from '@nestjs/common';
import { CreateUser } from 'src/domain/use-cases/';
import { UserRepositoryModule } from 'src/infra/database/prisma/repositories/users-repositories.module';
import { CreateUserImplementation } from './';

@Module({
  imports: [UserRepositoryModule],
  providers: [
    {
      provide: CreateUser,
      useClass: CreateUserImplementation,
    },
  ],
  exports: [CreateUser],
})
export class UsersUseCasesModule {}
