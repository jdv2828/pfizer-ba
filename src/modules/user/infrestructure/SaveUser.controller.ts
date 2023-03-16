import { Controller, Post } from '@nestjs/common';
import { SaveUserService } from '../apllication/SaveUser.service';
import EventManager from 'src/common/events/Event.manager';

@Controller('users')
export class SaveUserController {
  public constructor(private readonly saveUserService: SaveUserService) {}
  @Post()
  handle() {
    const user = this.saveUserService.handle(
      'jdv@gmail.com',
      'password',
      'Jorge',
      'Villafañe',
    );
    EventManager.commitAll();
    return user;
  }
}
