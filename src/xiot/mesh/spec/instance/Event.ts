import {EventType} from '../definitions/urn/EventType';

export class Event {

  public iid: number;
  public type: EventType;
  public description: string;
  public arguments: Array<Number>;

  constructor() {
    this.arguments = [];
  }
}
