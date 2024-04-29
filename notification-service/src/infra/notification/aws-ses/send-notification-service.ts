import { Inject, Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { SendNotificationDTO } from 'src/domain/DTOS/send-notification-dto';
import { AWS_EMAIL } from '../../../env';

@Injectable()
export class SendNotificationService {
  constructor(@Inject('AWS.SES') private readonly ses: AWS.SES) {}

  async send({ body, subject, to }: SendNotificationDTO) {
    const params = {
      Destination: {
        ToAddresses: [to],
      },
      Message: {
        Body: {
          Text: { Data: body },
        },
        Subject: { Data: subject },
      },
      Source: AWS_EMAIL,
    };

    try {
      await this.ses.sendEmail(params).promise();
      console.log('E-mail enviado com sucesso');
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  }
}
