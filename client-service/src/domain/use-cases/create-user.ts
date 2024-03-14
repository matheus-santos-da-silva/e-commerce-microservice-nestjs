import { CreateUserDTO } from '../DTOS/create-user-dto';
import { User } from '../models/user';

export abstract class CreateUser {
  abstract create(user: CreateUserDTO): Promise<User>;
}
