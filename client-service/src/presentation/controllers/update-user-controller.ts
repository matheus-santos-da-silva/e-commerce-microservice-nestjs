import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Patch,
  Headers,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateUser, GetUserById } from 'src/domain/use-cases/';
import { UpdateUserVM, UserResponseViewModel } from '../view-models';
import {
  HttpConflictError,
  HttpNotFoundError,
  HttpUnauthorizedError,
} from '../swagger/http-errors';
import { ValidateToken } from 'src/data/utils/validate-token';

@ApiTags('Users')
@Controller('users')
export class UpdateUserController {
  constructor(
    private readonly updateUser: UpdateUser,
    private readonly getUserById: GetUserById,
  ) {}

  @ApiOperation({ summary: 'Update User' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: UserResponseViewModel,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiResponse(HttpUnauthorizedError)
  @ApiResponse(HttpConflictError)
  @ApiParam({ name: 'id', type: String })
  @ApiBearerAuth()
  @Patch(':id')
  async execute(
    @Param('id') id: string,
    @Body() user: UpdateUserVM,
    @Headers('Authorization') authorization: string,
  ): Promise<UserResponseViewModel> {
    await ValidateToken(authorization, id);
    const checkUser = await this.getUserById.getById(id);
    if (!checkUser) throw new NotFoundException('User was not found');
    const updatedUser = await this.updateUser.update(id, user);

    return UserResponseViewModel.toViewModel(updatedUser);
  }
}
