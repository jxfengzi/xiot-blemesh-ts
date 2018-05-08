import {ConstraintValue} from './ConstraintValue';
import {DataFormat} from './data/DataFormat';
import {DataValue} from './data/DataValue';
import {DataValueFactory} from './data/DataValueFactory';

export class ValueRange implements ConstraintValue {
    public format: DataFormat;
    public minValue: DataValue;
    public maxValue: DataValue;
    public stepValue: DataValue;
    public hasStep: boolean;

    constructor(format: DataFormat, list: Array<Object>) {
        if (list.length === 2) {
            this.init(format, list[0], list[1], null);
        } else if (list.length === 3) {
            this.init(format, list[0], list[1], list[2]);
        } else {
            throw new Error('invalid range');
        }
    }

    private init(format: DataFormat, min: Object, max: Object, step: Object) {
        this.format = format;
        this.minValue = DataValueFactory.create(format, min);
        this.maxValue = DataValueFactory.create(format, max);

        if (step != null) {
            this.stepValue = DataValueFactory.create(format, step);
            this.hasStep = true;
        } else {
            this.stepValue = null;
            this.hasStep = false;
        }

        if (!this.minValue.lessEquals(this.maxValue)) {
            throw new Error('invalid value range: ' + min + ' <= ' + max);
        }
    }

    validate(value: DataValue): boolean {
        if (this.hasStep) {
            return value.validateStep(this.minValue, this.maxValue, this.stepValue);
        }

        return value.validate(this.minValue, this.maxValue);
    }

    toJsonArray(): Array<Object> {
        if (this.hasStep) {
            return [this.minValue.getObjectValue(), this.maxValue.getObjectValue(), this.stepValue.getObjectValue()];
        } else {
            return [this.minValue.getObjectValue(), this.maxValue.getObjectValue()];
        }
    }
}
