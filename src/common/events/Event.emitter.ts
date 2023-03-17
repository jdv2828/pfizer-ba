import { EventEmitter2 } from '@nestjs/event-emitter';

export default class EventEmitter {
  private static eventEmitter: EventEmitter2;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): EventEmitter2 {
    if (!this.eventEmitter) {
      this.eventEmitter = new EventEmitter2();
    }
    return this.eventEmitter;
  }
}
