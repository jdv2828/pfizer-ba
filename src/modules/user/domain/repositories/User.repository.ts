import { TokenDto } from '../../apllication/dto/Token.dto';
export interface UserRepository {
  fetchAll(tokenDto: TokenDto);
}
export const UserRepository = Symbol('UserRepository');
