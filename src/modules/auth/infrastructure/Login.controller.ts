import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginAction } from '../application/LoginUser.action';
import { Credentials } from '../application/dto/auth.dto';

@Controller('auth')
export class LoginController {
  constructor(private loginUserAction: LoginAction) {}

  @Post('login')
  @HttpCode(200)
  login(@Body() credentials: Credentials) {
    return this.loginUserAction.handler(credentials);
  }
}