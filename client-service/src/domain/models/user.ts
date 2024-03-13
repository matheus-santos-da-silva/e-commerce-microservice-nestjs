export interface UserProps {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export class User {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;

  constructor({ email, name, password, phone }: UserProps) {
    this.email = email;
    this.name = name;
    this.password = password;
    this.phone = phone;
  }
}
