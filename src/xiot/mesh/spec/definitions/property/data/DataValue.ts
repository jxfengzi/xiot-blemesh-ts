import {DataFormat} from './DataFormat';

export interface DataValue {

  lessEquals(maxValue: DataValue): boolean;

  validate(min: DataValue, max: DataValue): boolean;

  validateStep(min: DataValue, max: DataValue, step: DataValue): boolean;

  getObjectValue(): Object;

  getFormat(): DataFormat;
}
