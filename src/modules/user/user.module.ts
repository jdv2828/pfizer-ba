import { Module } from '@nestjs/common';
import { UserRepository } from './domain/repositories/User.repository';
import { FetchUsersController } from './infrestructure/FetchUsers.controller';
import { FetchUsersService } from './apllication/FetchUsers.service';
import { UserRepositoryImp } from './infrestructure/repositories/User.repository-imp';
import { HttpModule } from '@nestjs/axios';
import EventProvider from './infrestructure/providers/Event.provider';
import { SaveUserService } from './apllication/SaveUser.service';
import { SaveUserController } from './infrestructure/SaveUser.controller';

@Module({
  imports: [HttpModule],
  controllers: [FetchUsersController, SaveUserController],
  providers: [
    FetchUsersService,
    { provide: UserRepository, useClass: UserRepositoryImp },
    SaveUserService,
    EventProvider,
  ],
  exports: [UserRepository],
})
export class UserModule {}
