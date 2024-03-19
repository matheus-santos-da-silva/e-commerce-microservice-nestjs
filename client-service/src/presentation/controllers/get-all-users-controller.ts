import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllUsers } from 'src/domain/use-cases/';
import { UserResponseViewModel } from '../view-models';

@ApiTags('Users')
@Controller('users')
export class GetAllUsersController {
  constructor(private readonly getAllUsers: GetAllUsers) {}

  @ApiOperation({ summary: 'Get All Users' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserResponseViewModel,
    isArray: true,
  })
  @Get()
  async execute(): Promise<UserResponseViewModel[]> {
    const users = await this.getAllUsers.getAll();

    const payload: UserResponseViewModel[] = [];
    for (const user of users) {
      payload.push(UserResponseViewModel.toViewModel(user));
    }

    return payload;
  }
}
