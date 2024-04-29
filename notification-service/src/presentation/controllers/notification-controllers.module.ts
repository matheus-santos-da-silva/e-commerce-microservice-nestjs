import { Module } from '@nestjs/common';
import { SendNotificationController } from './send-notification-controller';
import { NotificationUseCasesModule } from 'src/data/use-cases-implementation/notifications-use-cases-module';

@Module({
  imports: [NotificationUseCasesModule],
  controllers: [SendNotificationController],
})
export class NotificationControllersModule {}
