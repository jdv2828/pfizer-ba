import { Module } from '@nestjs/common';
import { LoginController } from './infrastructure/Login.controller';
import { LoginService } from './application/LoginUser.service';
import { AuthRepository } from './domain/repositories/Auth.repository';
import { KeyCloakRepositoryImp } from './infrastructure/repositories/Keycloack.repository-imp';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [LoginController],
  providers: [
    LoginService,
    {
      provide: AuthRepository,
      useClass: KeyCloakRepositoryImp,
    },
  ],
  exports: [AuthRepository],
})
export class AuthModule {}
