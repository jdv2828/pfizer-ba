import { Module } from '@nestjs/common';
import { AuthController } from './infrastructure/auth.controller';
import { LoginUserAction } from './application/loginUser.action';
import { AuthRepository } from './domain/repositories/auth.repository';
import { KeyCloakRepository } from './infrastructure/repositories/keycloack.repository';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AuthController],
  providers: [
    LoginUserAction,
    {
      provide: AuthRepository,
      useClass: KeyCloakRepository,
    },
  ],
  exports: [AuthRepository],
})
export class AuthModule {}
