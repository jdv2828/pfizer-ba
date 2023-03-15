import { CredentialsDto } from '../../application/dto/Credentials.dto';

export interface AuthRepository {
  auth(credentials: CredentialsDto);
}

export const AuthRepository = Symbol('AuthRepository');
