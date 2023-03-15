import { Controller, Get, Headers } from '@nestjs/common';
import { TokenDto } from '../apllication/dto/Credentials.dto';
import { FetchUsersService } from '../apllication/FetchUsers.service';

@Controller('users')
export class FetchUsersController {
  constructor(private readonly fetchUsersService: FetchUsersService) {}
  @Get()
  public handle(@Headers('authorization') token: TokenDto) {
    return this.fetchUsersService.execute(token);
  }
}
