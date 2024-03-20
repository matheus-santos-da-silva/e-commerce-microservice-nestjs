import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUser } from 'src/domain/use-cases/';
import { UpdateUserVM, UserResponseViewModel } from '../view-models';
import { HttpNotFoundError } from '../swagger/http-errors';

@ApiTags('Users')
@Controller('users')
export class UpdateUserController {
  constructor(private readonly updateUser: UpdateUser) {}

  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Patch(':id')
  async execute(
    @Param('id') id: string,
    @Body() user: UpdateUserVM,
  ): Promise<UserResponseViewModel> {
    const updatedUser = await this.updateUser.update(id, user);

    return updatedUser;
  }
}
