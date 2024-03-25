import { User } from 'src/domain/models/user';
import { UpdateUser } from 'src/domain/use-cases';
import { GetUserByFieldsRepository, UpdateUserRepository } from '../protocols';
import { UpdateUserDTO } from 'src/domain/DTOS/update-user-dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { encryptingPass } from '../utils/encrypt-pass';

@Injectable()
export class UpdateUserImplementation implements UpdateUser {
  constructor(
    private readonly repository: UpdateUserRepository,
    private readonly getUserByfields: GetUserByFieldsRepository,
  ) {}

  async update(id: string, user: UpdateUserDTO): Promise<User> {
    if (user.email || user.phone) {
      const checkUserEmail = await this.getUserByfields.getUserByEmail(
        user.email,
      );
      const checkUserPhone = await this.getUserByfields.getUserByPhone(
        user.phone,
      );
      if (checkUserEmail) {
        throw new ConflictException('Email is already in use');
      }
      if (checkUserPhone) {
        throw new ConflictException('Phone is already in use');
      }
    }

    if (user.password) {
      const passwordHash = await encryptingPass(user.password);
      const updatedUser = await this.repository.update(id, {
        ...user,
        password: passwordHash,
      });

      return updatedUser;
    }

    const updatedUser = await this.repository.update(id, user);
    return updatedUser;
  }
}
