import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { LoginService } from '../application/LoginUser.service';
import { CredentialsDto } from '../application/dto/Credentials.dto';

@Controller('auth')
export class LoginController {
  constructor(private loginServer: LoginService) {}

  @Post('login')
  @HttpCode(200)
  handle(@Body() credentials: CredentialsDto) {
    return this.loginServer.execute(credentials);
  }
}
