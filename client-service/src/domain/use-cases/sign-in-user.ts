import { SignInUserDTO } from '../DTOS/sign-in-user-dto';

export type SignInUserResponse = {
  token: string;
};

export abstract class SignInUser {
  abstract execute(user: SignInUserDTO): Promise<SignInUserResponse>;
}
