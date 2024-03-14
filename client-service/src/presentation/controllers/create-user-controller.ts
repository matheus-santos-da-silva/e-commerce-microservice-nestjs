import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/domain/DTOS/create-user-dto';
import { CreateUser } from 'src/domain/use-cases/';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUser: CreateUser) {}

  @Post('create')
  async execute(@Body() user: CreateUserDTO) {
    const newUser = await this.createUser.create(user);
    return newUser;
  }
}
