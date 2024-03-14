import { Module } from '@nestjs/common';
import { PrismaModule } from '../config/prisma.module';
import { CreateUserRepository } from '../../../../data/protocols/index';
import { UsersPrismaRepository } from './user-prisma-repository';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: CreateUserRepository,
      useClass: UsersPrismaRepository,
    },
  ],
  exports: [CreateUserRepository],
})
export class UserRepositoryModule {}
