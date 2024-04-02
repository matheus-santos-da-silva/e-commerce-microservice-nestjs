export abstract class DeleteProductRepository {
  abstract delete(id: string): Promise<void>;
}
