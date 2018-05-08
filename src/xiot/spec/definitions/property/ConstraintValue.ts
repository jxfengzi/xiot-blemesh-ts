import {DataValue} from './data/DataValue';

export interface ConstraintValue {

    validate(value: DataValue): boolean;

    toJsonArray(): Array<Object>;
}
