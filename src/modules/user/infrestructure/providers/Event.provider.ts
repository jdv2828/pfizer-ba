import { Injectable } from '@nestjs/common';

import EventEmitter from 'src/common/events/Event.emitter';
import UserWasCreated from '../../domain/events/UserWasCreated';
import StoreUser from '../listeners/StoreUser';

@Injectable()
export default class EventProvider {
  private events = {
    [UserWasCreated.eventName]: [StoreUser.handle],
  };

  public constructor() {
    for (const eventName in this.events) {
      this.events[eventName].forEach((eventHandler) => {
        EventEmitter.getInstance().on(eventName, eventHandler);
      });
    }
  }
}
