import { Module } from '@nestjs/common';
import { SendNotificationService } from 'src/infra/notification/aws-ses/send-notification-service';
import { AwsSesModule } from 'src/infra/notification/aws-ses/config/aws-ses-config';
import { SendNotificationRepository } from 'src/data/protocols/send-notification-repository';

@Module({
  imports: [AwsSesModule],
  providers: [
    {
      provide: SendNotificationRepository,
      useClass: SendNotificationService,
    },
  ],
  exports: [SendNotificationRepository],
})
export class NotificationRepositoriesModule {}
