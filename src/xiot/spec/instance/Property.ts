import {PropertyDefinition} from '../definitions/PropertyDefinition';
import {PropertyValue} from './PropertyValue';
import {DataValueFactory} from '../definitions/property/data/DataValueFactory';

export class Property {

  public iid: number;
  public definition: PropertyDefinition;
  public value: PropertyValue;
  public valueToWrite: Object;

  trySetValue(value: Object): boolean {
    if (this.value == null) {
      this.value = PropertyValue.create(this.definition.format);
    }

    return this.setDataValue(value, false);
  }

  setValue(value: Object): boolean {
    return this.setDataValue(value, true);
  }

  private setDataValue(newValue: Object, write: boolean): boolean {
    if (newValue == null) {
      return false;
    }

    const v = DataValueFactory.create(this.definition.format, newValue);

    if (! this.definition.validate(v)) {
      return false;
    }

    if (write) {
      this.value.update(v);
    }

    return true;
  }
}
