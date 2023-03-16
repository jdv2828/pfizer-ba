import Event from 'src/common/events/Event';
import { User } from '../User';

export default class UserCreated extends Event {
  public static eventName = 'user.created';
  private user: User;

  public constructor(user: User) {
    super();
    this.user = user;
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
}
