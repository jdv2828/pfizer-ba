import { Credentials } from '../../application/dto/auth.dto';

export interface AuthRepository {
  auth(credentials: Credentials);
}

export const AuthRepository = Symbol('AuthRepository');
