import { CreateUserDTO } from 'src/domain/DTOS/create-user-dto';
import { User } from 'src/domain/models/user';

export abstract class CreateUserRepository {
  abstract create(user: CreateUserDTO): Promise<User>;
}
