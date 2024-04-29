import { Notification } from 'src/domain/models/notification';
import { SendNotificationDTO } from '../../domain/DTOS/send-notification-dto';
import { SendNotification } from '../../domain/use-cases/send-notification';
import { Injectable } from '@nestjs/common';
import { SendNotificationRepository } from '../protocols/send-notification-repository';

@Injectable()
export class SendNotificationImplementation implements SendNotification {
  constructor(private readonly sendNotification: SendNotificationRepository) {}

  async send({ body, subject, to }: SendNotificationDTO): Promise<void> {
    const notification = new Notification({
      to,
      body,
      subject,
    });

    await this.sendNotification.send(notification);
  }
}
