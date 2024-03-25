import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignInUser, SignInUserResponse } from 'src/domain/use-cases';
import { HttpNotFoundError } from '../swagger/http-errors';
import { SignInUserResponseVM, SignInUserVM } from '../view-models/';

@ApiTags('Users')
@Controller('users')
export class SignInUserController {
  constructor(private readonly signInUser: SignInUser) {}

  @ApiOperation({ summary: 'Sign In User' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: SignInUserResponseVM,
  })
  @ApiResponse(HttpNotFoundError)
  @Post('signin')
  @HttpCode(200)
  async execute(@Body() user: SignInUserVM): Promise<SignInUserResponse> {
    const result = await this.signInUser.execute(user);
    return result;
  }
}
