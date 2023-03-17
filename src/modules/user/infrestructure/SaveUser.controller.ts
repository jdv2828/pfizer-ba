import { Body, Controller, Post, Headers, UseGuards } from '@nestjs/common';
import { SaveUserService } from '../apllication/SaveUser.service';
import EventManager from 'src/common/events/Event.manager';
import { CreateUserDto } from '../apllication/dto/User.dto';
import { TokenDto } from '../apllication/dto/Token.dto';
import { AuthenticationGuard } from './guards/authentication.guard';

@Controller('users')
export class SaveUserController {
  public constructor(private readonly saveUserService: SaveUserService) {}
  @Post()
  @UseGuards(AuthenticationGuard)
  async handle(
    @Body() body: CreateUserDto,
    @Headers('authorization') token?: TokenDto,
  ) {
    const user = await this.saveUserService.handle(body, token);
    EventManager.commitAll();
    return user;
  }
}
