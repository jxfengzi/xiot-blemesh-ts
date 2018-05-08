import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';
import {Vint32} from './Vint32';

export class Vint64 implements DataValue {

    private value: number;

    static create(value: Object): Vint64 {
      if (typeof(value) === 'number') {
        const v = new Vint64();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
    }

    static fromString(value: string): Vint64 {
        const v = new Vint64();
        v.value = Number.parseInt(value);
        return v;
    }

    lessEquals(max: DataValue): boolean {
      if (!(max instanceof Vint64)) {
        return false;
      }

      return this.value < (<Vint64> max).value;
    }

    validate(min: DataValue, max: DataValue): boolean {
      if (!(min instanceof Vint64) || !(max instanceof Vint64)) {
        return false;
      }

      if (this.value < (<Vint64> min).value || this.value > (<Vint64> max).value) {
        return false;
      }

      return false;
    }

    validateStep(min: DataValue, max: DataValue, step: DataValue): boolean {
      if (!(min instanceof Vint64) || !(max instanceof Vint64) || !(step instanceof Vint64)) {
        return false;
      }

      const minValue = (<Vint64> min).value;
      const maxValue = (<Vint64> max).value;
      const stepValue = (<Vint64> step).value;

      for (let v = minValue; v < maxValue; v += stepValue) {
        if (v === this.value) {
          return true;
        }
      }

      return false;
    }

    getObjectValue(): Object {
      return this.value;
    }

    getFormat(): DataFormat {
      return DataFormat.INT64;
    }
  }
