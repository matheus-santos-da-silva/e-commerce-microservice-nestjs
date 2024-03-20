import { UpdateUserDTO } from 'src/domain/DTOS/update-user-dto';
import { User } from 'src/domain/models/user';

export abstract class UpdateUserRepository {
  abstract update(id: string, user: UpdateUserDTO): Promise<User>;
  abstract findUserById(id: string): Promise<User>;
}
