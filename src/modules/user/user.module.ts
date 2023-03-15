import { Module } from '@nestjs/common';
import { UserRepository } from './domain/repositories/User.repository';
import { FetchUsersController } from './infrestructure/FetchUsers.controller';
import { FetchUsersService } from './apllication/FetchUsers.service';
import { UserRepositoryImp } from './infrestructure/repositories/User.repository-imp';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FetchUsersController],
  providers: [
    FetchUsersService,
    { provide: UserRepository, useClass: UserRepositoryImp },
  ],
  exports: [UserRepository],
})
export class UserModule {}
