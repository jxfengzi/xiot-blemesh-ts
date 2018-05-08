import {ServiceType} from '../definitions/urn/ServiceType';
import {Property} from './Property';
import {Action} from './Action';
import {Event} from './Event';

export class Service {
  public iid: number;
  public type: ServiceType;
  public description: string;
  public properties: Map<Number, Property>;
  public actions: Map<Number, Action>;
  public events: Map<Number, Event>;

  constructor() {
    this.properties = new Map<Number, Property>();
    this.actions = new Map<Number, Action>();
    this.events = new Map<Number, Event>();
  }

  getProperties(): Array<Property> {
    return Array.from(this.properties.values());
  }

  getActions(): Array<Action> {
    return Array.from(this.actions.values());
  }

  getEvents(): Array<Event> {
    return Array.from(this.events.values());
  }
}
