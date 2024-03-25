import { SignInUserDTO } from 'src/domain/DTOS/sign-in-user-dto';
import {
  SignInUser,
  SignInUserResponse,
} from 'src/domain/use-cases/sign-in-user';
import { GetUserByFieldsRepository } from '../protocols';
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { compare } from 'bcrypt';
import { createUserToken } from '../utils/create-user-token';

@Injectable()
export class SignInUserImplementation implements SignInUser {
  constructor(private readonly repository: GetUserByFieldsRepository) {}

  async execute({
    email,
    password,
  }: SignInUserDTO): Promise<SignInUserResponse> {
    const user = await this.repository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('User was not found');
    }

    const checkPassword = await compare(password, user.password);
    if (!checkPassword) throw new UnauthorizedException('Wrong password');

    const token = await createUserToken({
      email,
      id: user.id,
    });

    return {
      token,
    };
  }
}
