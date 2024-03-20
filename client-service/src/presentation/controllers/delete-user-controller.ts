import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeleteUser } from 'src/domain/use-cases/';
import { HttpNotFoundError } from '../swagger/http-errors';

@ApiTags('Users')
@Controller('users')
export class DeleteUserController {
  constructor(private readonly deleteUser: DeleteUser) {}

  @ApiOperation({ summary: 'Delete User' })
  @ApiResponse({
    status: 200,
    description: 'Success',
  })
  @ApiResponse(HttpNotFoundError)
  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  async execute(@Param('id') id: string): Promise<void> {
    await this.deleteUser.delete(id);
  }
}
