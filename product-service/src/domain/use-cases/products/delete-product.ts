export abstract class DeleteProduct {
  abstract delete(id: string): Promise<void>;
}
