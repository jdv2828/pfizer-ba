import { EventEmitter2 } from '@nestjs/event-emitter';
import Event from './Event';
import EventEmitter from './Event.emitter';

export default class EventManager {
  private static dispatchedEvents: Event[] = [];

  public static dispatch(event: Event) {
    EventManager.dispatchedEvents.push(event);
  }

  public static commitAll() {
    const eventEmitter: EventEmitter2 = EventEmitter.getInstance();

    EventManager.dispatchedEvents.forEach((event: Event) => {
      eventEmitter.emit(event.getName(), event);

      // TODO: Store event
    });

    EventManager.dispatchedEvents = [];
  }
}
