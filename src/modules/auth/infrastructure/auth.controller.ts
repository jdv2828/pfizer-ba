import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserAction } from '../application/loginUser.action';
import { Credentials } from '../application/dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private loginUserAction: LoginUserAction) {}

  @Post('login')
  login(@Body() credentials: Credentials) {
    return this.loginUserAction.handler(credentials);
  }
}
