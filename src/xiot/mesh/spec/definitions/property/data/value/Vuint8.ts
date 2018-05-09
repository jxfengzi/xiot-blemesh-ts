import {DataValue} from '../DataValue';
import {DataFormat} from '../DataFormat';

export class Vuint8 implements DataValue {

    private value: number;

    static create(value: Object): Vuint8 {
      if (typeof(value) === 'number') {
        const v = new Vuint8();
        v.value = <number>value;
        return v;
      }

      throw new Error('invalid value: ' + value);
    }

    static fromString(value: string): Vuint8 {
        const v = new Vuint8();
        v.value = Number.parseInt(value);
        return v;
    }

    lessEquals(max: DataValue): boolean {
      if (!(max instanceof Vuint8)) {
        return false;
      }

      return this.value < (<Vuint8> max).value;
    }

    validate(min: DataValue, max: DataValue): boolean {
      if (!(min instanceof Vuint8) || !(max instanceof Vuint8)) {
        return false;
      }

      if (this.value < (<Vuint8> min).value || this.value > (<Vuint8> max).value) {
        return false;
      }

      return false;
    }

    validateStep(min: DataValue, max: DataValue, step: DataValue): boolean {
      if (!(min instanceof Vuint8) || !(max instanceof Vuint8) || !(step instanceof Vuint8)) {
        return false;
      }

      const minValue = (<Vuint8> min).value;
      const maxValue = (<Vuint8> max).value;
      const stepValue = (<Vuint8> step).value;

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
      return DataFormat.UINT8;
    }
}
