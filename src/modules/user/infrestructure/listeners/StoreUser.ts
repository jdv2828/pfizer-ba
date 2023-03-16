import { Injectable } from '@nestjs/common';
import UserCreated from '../../domain/events/UserCreated';
import axios from 'axios';

@Injectable()
export default class StoreUser {
  public static async handle(event: UserCreated) {
    const user = event.getUser();
    console.log(user);
  }
}
