import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';
import {Vuint8} from './Vuint8';

export class Vuint16 implements DataValue {

    private value: number;

    static create(value: Object): Vuint16 {
      if (typeof(value) === 'number') {
        const v = new Vuint16();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
    }

    static fromString(value: string): Vuint16 {
        const v = new Vuint16();
        v.value = Number.parseInt(value);
        return v;
    }

    lessEquals(max: DataValue): boolean {
      if (!(max instanceof Vuint16)) {
        return false;
      }

      return this.value < (<Vuint16> max).value;
    }

    validate(min: DataValue, max: DataValue): boolean {
      if (!(min instanceof Vuint16) || !(max instanceof Vuint16)) {
        return false;
      }

      if (this.value < (<Vuint16> min).value || this.value > (<Vuint16> max).value) {
        return false;
      }

      return false;
    }

    validateStep(min: DataValue, max: DataValue, step: DataValue): boolean {
      if (!(min instanceof Vuint16) || !(max instanceof Vuint16) || !(step instanceof Vuint16)) {
        return false;
      }

      const minValue = (<Vuint16> min).value;
      const maxValue = (<Vuint16> max).value;
      const stepValue = (<Vuint16> step).value;

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
      return DataFormat.UINT16;
    }
  }
