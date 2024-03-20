import { UpdateUserDTO } from '../DTOS/update-user-dto';
import { User } from '../models/user';

export abstract class UpdateUser {
  abstract update(id: string, user: UpdateUserDTO): Promise<User>;
}
