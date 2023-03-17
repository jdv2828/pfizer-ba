import EventManager from '@src/common/events/Event.manager';
import UserWasCreated from '@src/modules/user/domain/events/UserWasCreated';
import { CreateUserDto } from '../apllication/dto/User.dto';
import { TokenDto } from '../apllication/dto/Token.dto';
export class User {
  email: string;
  credentials: { type: string; value: string }[];
  enabled: boolean;
  emailVerified: boolean;
  firstName: string;
  lastName: string;

  constructor(dto: CreateUserDto) {
    this.email = dto.email;
    this.credentials = dto.credentials;
    this.enabled = dto.enabled ?? true;
    this.emailVerified = dto.emailVerified ?? true;
    this.firstName = dto.firstName ?? '';
    this.lastName = dto.lastName ?? '';
  }

  public static async register(
    dto: CreateUserDto,
    token?: TokenDto,
  ): Promise<User> {
    const user = new User(dto);
    EventManager.dispatch(new UserWasCreated(user, token));
    return user;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getEmail(): string {
    return this.email;
  }

  public getCredentials(): { type: string; value: string }[] {
    return this.credentials;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public isEmailVerified(): boolean {
    return this.emailVerified;
  }
}
