import {ServiceType} from './urn/ServiceType';
import {DataFormat, DataFormatToString} from './property/data/DataFormat';
import {Access} from './property/Access';
import {Unit} from './property/Unit';
import {ConstraintValue} from './property/ConstraintValue';
import {DataValue} from './property/data/DataValue';
import {ValueList} from './property/ValueList';

export class PropertyDefinition {
  public type: ServiceType;
  public description: string;
  public format: DataFormat;
  public access: Access;
  public constraintValue: ConstraintValue;
  public unit: Unit;

  validate(value: DataValue): boolean {
    if (value == null) {
      return false;
    }

    if (this.format === value.getFormat()) {
      return false;
    }

    if (this.constraintValue != null) {
      return this.constraintValue.validate(value);
    }

    return true;
  }

  getFormatString(): string {
    return DataFormatToString(this.format);
  }

  isEditableTextValue(): boolean {
    if (this.valueList() != null) {
      return false;
    }

    if (this.format === DataFormat.BOOL) {
      return false;
    }

    if (! this.access.isWritable) {
      return false;
    }

    return true;
  }

  isReadOnlyTextValue(): boolean {
    if (this.valueList() != null) {
      return false;
    }

    if (this.format === DataFormat.BOOL) {
      return false;
    }

    if (this.access.isWritable) {
      return false;
    }

    if (! this.access.isReadable) {
      return false;
    }

    return true;
  }

  valueList(): ValueList {
    if (this.constraintValue !== null) {
      if (this.constraintValue instanceof ValueList) {
        return this.constraintValue;
      }
    }

    return null;
  }
}
