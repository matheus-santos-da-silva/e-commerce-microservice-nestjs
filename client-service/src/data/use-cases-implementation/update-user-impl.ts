import { User } from 'src/domain/models/user';
import { UpdateUser } from 'src/domain/use-cases';
import { UpdateUserRepository } from '../protocols';
import { UpdateUserDTO } from 'src/domain/DTOS/update-user-dto';
import { Injectable } from '@nestjs/common';
import { encryptingPass } from '../utils/encrypt-pass';

@Injectable()
export class UpdateUserImplementation implements UpdateUser {
  constructor(private readonly repository: UpdateUserRepository) {}

  async update(id: string, user: UpdateUserDTO): Promise<User> {
    await this.repository.findUserById(id);

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
