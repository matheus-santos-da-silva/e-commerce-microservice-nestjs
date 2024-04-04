export abstract class DeleteCustomer {
  abstract delete(data: { id: string }): Promise<void>;
}
