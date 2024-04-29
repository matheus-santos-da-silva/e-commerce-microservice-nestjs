import { Module } from '@nestjs/common';
import { PubSubModule } from './infra/messaging/redis/pubsub.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationControllersModule } from './presentation/controllers/notification-controllers.module';

@Module({
  imports: [
    PubSubModule,
    ConfigModule.forRoot(),
    NotificationControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
