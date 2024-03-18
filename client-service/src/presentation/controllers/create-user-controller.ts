import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUser } from 'src/domain/use-cases/';
import { CreateUserVM, UserResponseViewModel } from '../view-models';
import { HttpBadRequestError, HttpConflictError } from '../swagger/http-errors';

@ApiTags('Users')
@Controller('users')
export class CreateUserController {
  constructor(private readonly createUser: CreateUser) {}

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({
    status: 201,
    description: 'Created',
    type: UserResponseViewModel,
  })
  @ApiResponse(HttpBadRequestError)
  @ApiResponse(HttpConflictError)
  @Post('create')
  async execute(@Body() user: CreateUserVM): Promise<UserResponseViewModel> {
    const newUser = await this.createUser.create(user);
    return UserResponseViewModel.toViewModel(newUser);
  }
}
