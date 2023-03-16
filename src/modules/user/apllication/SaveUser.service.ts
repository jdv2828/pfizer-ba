import { Injectable } from '@nestjs/common';
import { User } from '../domain/User';
@Injectable()
export class SaveUserService {
  public handle(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ): User {
    return User.register(email, password, firstName, lastName);
  }
}
