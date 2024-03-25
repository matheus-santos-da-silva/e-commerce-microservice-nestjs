import {
  Controller,
  Delete,
  NotFoundException,
  Param,
  Headers,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteUser, GetUserById } from 'src/domain/use-cases/';
import {
  HttpNotFoundError,
  HttpUnauthorizedError,
} from '../swagger/http-errors';
import { ValidateToken } from 'src/data/utils/validate-token';

@ApiTags('Users')
@Controller('users')
export class DeleteUserController {
  constructor(
    private readonly deleteUser: DeleteUser,
    private readonly getUserById: GetUserById,
  ) {}

  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpNotFoundError)
  @ApiResponse(HttpUnauthorizedError)
  @ApiParam({ name: 'id', type: String })
  @ApiBearerAuth()
  @Delete(':id')
  async execute(
    @Param('id') id: string,
    @Headers('Authorization') authorization: string,
  ): Promise<void> {
    await ValidateToken(authorization, id);

    const checkUser = await this.getUserById.getById(id);
    if (!checkUser) throw new NotFoundException('User was not found');
    await this.deleteUser.delete(id);
  }
}
