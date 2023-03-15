import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../domain/repositories/User.repository';
import { TokenDto } from './dto/Credentials.dto';

@Injectable()
export class FetchUsersService {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}
  execute(token: TokenDto) {
    return this.userRepository.fetchAll(token);
  }
}
