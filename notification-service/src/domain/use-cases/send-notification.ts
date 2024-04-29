import { SendNotificationDTO } from '../DTOS/send-notification-dto';

export abstract class SendNotification {
  abstract send(data: SendNotificationDTO): Promise<void>;
}
