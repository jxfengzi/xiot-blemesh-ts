import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class EventType extends Urn {

    static valueOf(string: string): EventType {
      let thiz = new EventType();

      if (!thiz.parse(UrnType.EVENT, string)) {
        thiz = undefined;
      }

      return thiz;
    }
  }
