import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class DeviceType extends Urn {

    static valueOf(string: string): DeviceType {
      let thiz = new DeviceType();

      if (!thiz.parse(UrnType.DEVICE, string)) {
        thiz = undefined;
      }

      return thiz;
    }
  }
