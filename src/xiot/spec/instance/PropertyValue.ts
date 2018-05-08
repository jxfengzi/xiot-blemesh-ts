import {DataFormat} from '../definitions/property/data/DataFormat';
import {DataValue} from '../definitions/property/data/DataValue';

export class PropertyValue {

  public format: DataFormat;
  public isChanged: boolean;
  public oldValue: DataValue;
  public currentValue: DataValue;

  static create(format: DataFormat): PropertyValue {
    const v = new PropertyValue();
    v.format = format;
    v.isChanged = false;
    v.oldValue = null;
    v.currentValue = null;
    return v;
  }

  update(newValue: DataValue) {
    if (newValue == null) {
      throw new Error('update failed: newValue is null');
    }

    if (this.format !== newValue.getFormat()) {
      throw new Error('update failed: newValue invalid format');
    }

    if (this.currentValue == null) {
      this.currentValue = newValue;
      this.isChanged = true;
    }

    if (this.currentValue === newValue) {
      return;
    }

    this.oldValue = this.currentValue;
    this.currentValue = newValue;
    this.isChanged = true;
  }
}
