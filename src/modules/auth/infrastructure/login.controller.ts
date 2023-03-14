import { Body, Controller, Post } from '@nestjs/common';
import { LoginAction } from '../application/loginUser.action';
import { Credentials } from '../application/dto/auth.dto';

@Controller('auth')
export class LoginController {
  constructor(private loginUserAction: LoginAction) {}

  @Post('login')
  login(@Body() credentials: Credentials) {
    return this.loginUserAction.handler(credentials);
  }
}
