import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';
import {Vint16} from './Vint16';

export class Vint32 implements DataValue {

    private value: number;

    static create(value: Object): Vint32 {
      if (typeof(value) === 'number') {
        const v = new Vint32();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
    }

    static fromString(value: string): Vint32 {
        const v = new Vint32();
        v.value = Number.parseInt(value);
        return v;
    }

    lessEquals(max: DataValue): boolean {
      if (!(max instanceof Vint32)) {
        return false;
      }

      return this.value < (<Vint32> max).value;
    }

    validate(min: DataValue, max: DataValue): boolean {
      if (!(min instanceof Vint32) || !(max instanceof Vint32)) {
        return false;
      }

      if (this.value < (<Vint32> min).value || this.value > (<Vint32> max).value) {
        return false;
      }

      return false;
    }

    validateStep(min: DataValue, max: DataValue, step: DataValue): boolean {
      if (!(min instanceof Vint32) || !(max instanceof Vint32) || !(step instanceof Vint32)) {
        return false;
      }

      const minValue = (<Vint32> min).value;
      const maxValue = (<Vint32> max).value;
      const stepValue = (<Vint32> step).value;

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
      return DataFormat.INT32;
    }

  }
