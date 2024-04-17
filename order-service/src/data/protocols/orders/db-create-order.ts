import { CreateOrderInfraDTO } from 'src/domain/DTOS/create-order-infra-dto';

export abstract class CreateOrderRepository {
  abstract create(data: CreateOrderInfraDTO): Promise<void>;
}
