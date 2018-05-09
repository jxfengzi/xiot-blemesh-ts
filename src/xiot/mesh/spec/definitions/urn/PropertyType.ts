import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class PropertyType extends Urn {

  static valueOf(string: string): PropertyType {
    let thiz = new PropertyType();

    if (!thiz.parse(UrnType.PROPERTY, string)) {
      thiz = undefined;
    }

    return thiz;
  }
}
