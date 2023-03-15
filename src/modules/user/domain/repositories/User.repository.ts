import { TokenDto } from '../../apllication/dto/Credentials.dto';
export interface UserRepository {
  fetchAll(tokenDto: TokenDto);
}
export const UserRepository = Symbol('UserRepository');
