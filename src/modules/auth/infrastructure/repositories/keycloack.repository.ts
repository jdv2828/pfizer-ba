import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Credentials } from '../../application/dto/auth.dto';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { settings } from 'src/config/settings';
import { CODES } from '../../../../common/codes.enum';

@Injectable()
export class KeyCloakRepository implements AuthRepository {
  constructor(private readonly httpService: HttpService) {}
  async auth(credentials: Credentials) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.post(
          `${settings.KEYCLOAK_URL}/realms/${settings.KEYCLOAK_REALM}/protocol/openid-connect/token`,
          new URLSearchParams({
            client_id: settings.KEYCLOAK_CLIENT_ID,
            grant_type: settings.KEYCLOAK_GRANT_TYPE,
            username: credentials.email,
            password: credentials.password,
          }),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
          },
        ),
      );
      return { data };
    } catch (error) {
      if (error?.response?.status === 401) {
        throw new HttpException(
          {
            message: CODES.ERROR_INVALID_CREDENTIALS,
            code: HttpStatus.UNAUTHORIZED,
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
      throw error;
    }
  }
}
