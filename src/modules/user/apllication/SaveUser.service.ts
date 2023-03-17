import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain/User';
import { TokenDto } from './dto/Token.dto';
import { CreateUserDto } from '@src/modules/user/apllication/dto/User.dto';
import { UserAlreadyExistsException } from '../domain/exceptions/UserAlreadyExists.exception';
import { UserRepository } from '../domain/repositories/User.repository';
@Injectable()
export class SaveUserService {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}
  public async handle(user: CreateUserDto, token?: TokenDto): Promise<User> {
    if (await this.userRepository.fetchByEmail(user.email, token)) {
      throw new UserAlreadyExistsException(user.email);
    }
    return User.register(user, token);
  }
}
