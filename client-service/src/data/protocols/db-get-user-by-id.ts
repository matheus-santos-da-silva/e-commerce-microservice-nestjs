import { User } from 'src/domain/models/user';

export abstract class GetUserByIdRepository {
  abstract getById(id: string): Promise<User>;
}
