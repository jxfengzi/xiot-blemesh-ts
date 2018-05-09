import {DeviceType} from './urn/DeviceType';
import {ServiceType} from './urn/ServiceType';

export class DeviceDefinition {
  public type: DeviceType;
  public description: string;
  public requiredServices: Array<ServiceType>;
  public optionalServices: Array<ServiceType>;
}
