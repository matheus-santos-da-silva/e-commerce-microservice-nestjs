export abstract class DeleteUser {
  abstract delete(id: string): Promise<void>;
}
