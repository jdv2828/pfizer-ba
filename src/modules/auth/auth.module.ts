import { Module } from '@nestjs/common';
import { LoginController } from './infrastructure/Login.controller';
import { LoginAction } from './application/LoginUser.action';
import { AuthRepository } from './domain/repositories/Auth.repository';
import { KeyCloakRepository } from './infrastructure/repositories/Keycloack.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [LoginController],
  providers: [
    LoginAction,
    {
      provide: AuthRepository,
      useClass: KeyCloakRepository,
    },
  ],
  exports: [AuthRepository],
})
export class AuthModule {}
