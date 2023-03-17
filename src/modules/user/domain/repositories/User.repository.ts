import { TokenDto } from '../../apllication/dto/Token.dto';
export interface UserRepository {
  fetchAll(tokenDto: TokenDto);
  fetchByEmail(id: string, tokenDto: TokenDto);
}
export const UserRepository = Symbol('UserRepository');
