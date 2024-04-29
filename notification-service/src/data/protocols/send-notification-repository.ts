import { SendNotificationDTO } from '../../domain/DTOS/send-notification-dto';

export abstract class SendNotificationRepository {
  abstract send(data: SendNotificationDTO): Promise<void>;
}
