import { CreateOrderDTO } from 'src/domain/DTOS/create-order-dto';

export abstract class CreateOrder {
  abstract create(data: CreateOrderDTO): Promise<void>;
}
