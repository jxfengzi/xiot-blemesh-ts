import {ConstraintValue} from './ConstraintValue';
import {ValueDefinition} from './ValueDefinition';
import {DataValue} from './data/DataValue';
import {BlemeshSpec} from '../../constant/Spec';

export class ValueList implements ConstraintValue {

  public values: Array<ValueDefinition>;

  constructor() {
    this.values = [];
  }

  validate(value: DataValue): boolean {
    for (const v of this.values) {
      if (v.value === value) {
        return true;
      }
    }

    return false;
  }

  toJsonArray(): Array<Object> {
      const array = [];

      for (const v of this.values) {
          const o = {};
          o[BlemeshSpec.VALUE] = v.value.getObjectValue();
          o[BlemeshSpec.DESCRIPTION] = v.description;
          array.push(o);
      }

      return array;
  }
}
