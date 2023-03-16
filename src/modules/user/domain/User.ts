import EventManager from '../../../common/events/Event.manager';
import UserCreated from './events/UserCreated';
export class User {
  email: string;
  credentials: { type: string; value: string }[];
  enabled: boolean;
  emailVerified: boolean;
  firstName: string;
  lastName: string;

  constructor(
    email: string,
    credentials: { type: string; value: string }[],
    enabled: boolean,
    emailVerified: boolean,
    firstName: string,
    lastName: string,
  ) {
    this.email = email;
    this.credentials = credentials;
    this.enabled = enabled;
    this.emailVerified = emailVerified;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public static register(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): User {
    const credentials = [{ type: 'password', value: password }];
    const user = User.make(email, password, firstName, lastName);
    EventManager.dispatch(new UserCreated(user));
    return new User(email, credentials, true, true, firstName, lastName);
  }

  public static make(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): User {
    const credentials = [{ type: 'password', value: password }];
    return new User(email, credentials, true, true, firstName, lastName);
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
