import { Injectable } from '@nestjs/common';
import UserWasCreated from '../../domain/events/UserWasCreated';
import axios from 'axios';
import { settings } from '../../../../config/settings';

@Injectable()
export default class StoreUser {
  public static async handle(event: UserWasCreated) {
    const user = event.getUser();
    const token = event.getAccessToken();
    const http = axios.create({
      baseURL: `${settings.KEYCLOAK_URL}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });
    console.log(user);
    await http.post(`/admin/realms/${settings.KEYCLOAK_REALM}/users`, user);
  }
}
