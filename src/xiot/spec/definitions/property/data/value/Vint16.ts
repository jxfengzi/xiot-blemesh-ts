import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';
import {Vint8} from './Vint8';

export class Vint16 implements DataValue {

    private value: number;

    static create(value: Object): Vint16 {
      if (typeof(value) === 'number') {
        const v = new Vint16();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
    }

    static fromString(value: string): Vint16 {
        const v = new Vint16();
        v.value = Number.parseInt(value);
        return v;
    }

    lessEquals(max: DataValue): boolean {
      if (!(max instanceof Vint16)) {
        return false;
      }

      return this.value < (<Vint16> max).value;
    }

    validate(min: DataValue, max: DataValue): boolean {
      if (!(min instanceof Vint16) || !(max instanceof Vint16)) {
        return false;
      }

      if (this.value < (<Vint16> min).value || this.value > (<Vint16> max).value) {
        return false;
      }

      return false;
    }

    validateStep(min: DataValue, max: DataValue, step: DataValue): boolean {
      if (!(min instanceof Vint16) || !(max instanceof Vint16) || !(step instanceof Vint16)) {
        return false;
      }

      const minValue = (<Vint16> min).value;
      const maxValue = (<Vint16> max).value;
      const stepValue = (<Vint16> step).value;

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
      return DataFormat.INT16;
    }
  }
