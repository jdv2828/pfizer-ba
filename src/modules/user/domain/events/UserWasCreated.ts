import Event from 'src/common/events/Event';
import { User } from '../User';
import { TokenDto } from '@src/modules/user/apllication/dto/Token.dto';

export default class UserWasCreated extends Event {
  public static eventName = 'user.created';
  private user: User;
  private token: TokenDto;

  public constructor(user: User, token?: TokenDto) {
    super();
    this.user = user;
    this.token = token;
  }

  public getTopic(): string {
    return 'user created';
  }

  public getName(): string {
    return 'user.created';
  }

  public getUser(): User {
    return this.user;
  }
  public getAccessToken(): TokenDto {
    return this.token;
  }
}
