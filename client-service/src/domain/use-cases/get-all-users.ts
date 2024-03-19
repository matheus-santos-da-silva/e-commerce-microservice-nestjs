import { User } from '../models/user';

export abstract class GetAllUsers {
  abstract getAll(): Promise<User[]>;
}
