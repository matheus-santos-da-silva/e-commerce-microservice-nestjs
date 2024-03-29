export interface CustomerProps {
  id: string;
  email: string;
}

export class Customer {
  id: string;
  email: string;

  constructor({ id, email }: CustomerProps) {
    this.id = id;
    this.email = email;
  }
}
