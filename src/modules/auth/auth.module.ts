import { Module } from '@nestjs/common';
import { LoginController } from './infrastructure/login.controller';
import { LoginAction } from './application/loginUser.action';
import { AuthRepository } from './domain/repositories/auth.repository';
import { KeyCloakRepository } from './infrastructure/repositories/keycloack.repository';
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
