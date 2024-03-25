import { User } from 'src/domain/models/user';

export abstract class GetUserByFieldsRepository {
  abstract getUserByEmail(email: string): Promise<User | null>;
  abstract getUserByPhone(phone: string): Promise<User | null>;
}
