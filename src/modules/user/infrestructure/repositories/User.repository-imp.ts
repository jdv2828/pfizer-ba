import { UserRepository } from '../../domain/repositories/User.repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { settings } from 'src/config/settings';
import { MESSAGES } from 'src/common/codes.enum';
import { TokenDto } from '../../apllication/dto/Token.dto';

@Injectable()
export class UserRepositoryImp implements UserRepository {
  constructor(private readonly httpService: HttpService) {}
  async fetchAll(token: TokenDto) {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          `${settings.KEYCLOAK_URL}/admin/realms/${settings.KEYCLOAK_REALM}/users`,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `${token}`,
            },
          },
        ),
      );
      return data;
    } catch (error) {
      if (error?.response?.status === 401) {
        throw new HttpException(
          {
            message: MESSAGES.ERROR_INVALID_CREDENTIALS,
            code: HttpStatus.UNAUTHORIZED,
          },
          HttpStatus.UNAUTHORIZED,
        );
      }
      throw error;
    }
  }
  async fetchByEmail(email: string, token: TokenDto): Promise<boolean> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${settings.KEYCLOAK_URL}/admin/realms/${settings.KEYCLOAK_REALM}/users`,
        {
          headers: {
            Authorization: `${token}`,
          },
        },
      ),
    );
    let found = false;
    data.forEach((obj) => {
      if (obj.email === email) {
        found = true;
      }
    });
    return found;
  }
}
