import { Module } from '@nestjs/common';
import { UsersControllersModule } from './presentation/controllers/users-controllers.module';
import { ConfigModule } from '@nestjs/config';
import { PubSubModule } from './infra/messaging/redis/pubsub.module';

@Module({
  imports: [UsersControllersModule, ConfigModule.forRoot(), PubSubModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
