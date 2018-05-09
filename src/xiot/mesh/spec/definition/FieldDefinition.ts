import {FieldType} from '../typedef/type/impl/FieldType';
import {FieldValueType} from '../typedef/type/impl/FieldValueType';
import {AbstractFieldValue} from './AbstractFieldValue';


export class FieldDefinition extends AbstractFieldValue {

    public type: FieldType;
    public bits: number;
    public values: Array<FieldValueType>;
}