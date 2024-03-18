import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/domain/models/user';

export class UserResponseViewModel {
  @ApiProperty({ example: 'a7f02e9e-a1da-48df-b64d-81789128cb73' })
  public id: string;

  @ApiProperty({ example: 'John Doe' })
  public name: string;

  @ApiProperty({ example: 'johndoe@example.com' })
  public email: string;

  @ApiProperty({ example: '6437949501' })
  public phone: string;

  constructor(id: string, email: string, name: string, phone: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.phone = phone;
  }

  static toViewModel({ email, id, name, phone }: User): UserResponseViewModel {
    return new UserResponseViewModel(email, id, name, phone);
  }
}
