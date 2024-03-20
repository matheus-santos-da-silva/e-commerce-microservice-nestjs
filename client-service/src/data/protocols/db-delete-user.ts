export abstract class DeleteUserRepository {
  abstract delete(id: string): Promise<void>;
}
