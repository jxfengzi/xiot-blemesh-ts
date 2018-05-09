import {DeviceType} from '../definitions/urn/DeviceType';
import {Service} from './Service';

export class Device {

  public type: DeviceType;
  public description: string;
  public services: Map<Number, Service>;

  constructor() {
    this.services = new Map<Number, Service>();
  }

  getServices(): Array<Service> {
    return Array.from(this.services.values());
  }
}
