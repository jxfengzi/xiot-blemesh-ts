import {DeviceType} from '../definitions/urn/DeviceType';

export class DeviceDetail {
  public did: string;
  public type: DeviceType;
  public name: string;
  public serialNumber: string;
  public online: boolean;
  public roomId: string;
}
