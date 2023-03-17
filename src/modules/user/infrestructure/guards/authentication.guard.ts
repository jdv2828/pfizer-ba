import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { tokenDecode, tokenExtract } from '@src/utils/token';
import * as jose from 'jose';
import { payloadDto } from '../../apllication/dto/Auth.dto';
import { MESSAGES } from '@src/common/codes.enum';

export class AuthenticationGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const tokenValue = tokenExtract(request.headers);
      const payload: payloadDto = tokenDecode(tokenValue);

      const jwks = jose.createRemoteJWKSet(
        new URL(payload.iss + '/protocol/openid-connect/certs'),
      );
      await jose.jwtVerify(tokenValue, jwks, {
        issuer: payload.iss,
        audience: payload.aud,
      });

      return true;
    } catch (error) {
      throw new HttpException(
        {
          status: MESSAGES.ERROR_INVALID_TOKEN,
          code: HttpStatus.UNAUTHORIZED,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
