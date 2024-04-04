export abstract class DeleteCustomerRepository {
  abstract delete(id: string): Promise<void>;
}
