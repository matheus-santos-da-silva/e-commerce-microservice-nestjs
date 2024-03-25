import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserById } from 'src/domain/use-cases';
import { UserResponseViewModel } from '../view-models';
import { HttpNotFoundError } from '../swagger/http-errors';

@ApiTags('Users')
@Controller('users')
export class GetUserByIdController {
  constructor(private readonly getUserById: GetUserById) {}

  @ApiOperation({ summary: 'Get User By Id' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async execute(@Param('id') id: string): Promise<UserResponseViewModel> {
    const user = await this.getUserById.getById(id);
    if (!user) {
      throw new NotFoundException('User was not found');
    }

    return UserResponseViewModel.toViewModel(user);
  }
}
