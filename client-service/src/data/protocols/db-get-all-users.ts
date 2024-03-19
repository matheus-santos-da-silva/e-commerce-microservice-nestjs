import { User } from 'src/domain/models/user';

export abstract class GetAllUsersRepository {
  abstract getAll(): Promise<User[]>;
}
