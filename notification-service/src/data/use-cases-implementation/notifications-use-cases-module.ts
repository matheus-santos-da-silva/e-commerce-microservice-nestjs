import { Module } from '@nestjs/common';
import { SendNotification } from '../../domain/use-cases/send-notification';
import { SendNotificationImplementation } from './send-notification-impl';
import { NotificationRepositoriesModule } from '../../infra/notification/repositories/notifications-repositories.module';

@Module({
  imports: [NotificationRepositoriesModule],
  providers: [
    {
      provide: SendNotification,
      useClass: SendNotificationImplementation,
    },
  ],
  exports: [SendNotification],
})
export class NotificationUseCasesModule {}
