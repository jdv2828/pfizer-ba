import { Inject, Injectable } from '@nestjs/common';
import { CredentialsDto } from './dto/Credentials.dto';
import { AuthRepository } from '../domain/repositories/Auth.repository';

@Injectable()
export class LoginService {
  constructor(
    @Inject(AuthRepository) private readonly authRepository: AuthRepository,
  ) {}
  public execute(credentials: CredentialsDto) {
    return this.authRepository.auth(credentials);
  }
}
