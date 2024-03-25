import { User } from '../models/user';

export abstract class GetUserById {
  abstract getById(id: string): Promise<User>;
}
