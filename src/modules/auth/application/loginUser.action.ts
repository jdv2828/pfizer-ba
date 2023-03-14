import { Inject, Injectable } from '@nestjs/common';
import { Credentials } from './dto/auth.dto';
import { AuthRepository } from '../domain/repositories/auth.repository';

@Injectable()
export class LoginAction {
  constructor(
    @Inject(AuthRepository) private readonly authRepository: AuthRepository,
  ) {}
  public handler(credentials: Credentials) {
    return this.authRepository.auth(credentials);
  }
}
