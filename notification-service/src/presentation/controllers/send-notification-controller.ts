import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SendNotification } from 'src/domain/use-cases/send-notification';

@Controller()
export class SendNotificationController {
  constructor(private readonly sendNotification: SendNotification) {}

  @MessagePattern('orders-create-order')
  async send(data: { customer: { id: string; email: string } }) {
    await this.sendNotification.send({
      to: data.customer.email,
      body: 'Olá, seu pedido foi realizado com sucesso! Aguardando o status do pagamento.',
      subject: 'Pedido realizado com sucesso',
    });
  }
}
