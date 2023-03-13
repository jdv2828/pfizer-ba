import { Injectable } from '@nestjs/common';
import { Credentials } from '../../application/dto/auth.dto';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class KeyCloakRepository implements AuthRepository {
  constructor(private readonly httpService: HttpService) {}
  async auth(credentials: Credentials) {
    credentials;
    const { data } = await firstValueFrom(
      this.httpService.post(
        'https://auth.pic.osana.dev/auth/realms/pfizer/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'admin-cli',
          grant_type: 'password',
          username: 'jorge.villafane@osanasalud.com',
          password: 'zorro3000*',
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      ),
    );
    return data;
  }
}
