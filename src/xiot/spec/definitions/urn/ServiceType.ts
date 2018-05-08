import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class ServiceType extends Urn {

  static valueOf(string: string): ServiceType {
    let thiz = new ServiceType();

    if (!thiz.parse(UrnType.SERVICE, string)) {
      thiz = undefined;
    }

    return thiz;
  }
}
