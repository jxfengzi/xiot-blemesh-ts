import {Urn} from '../Urn';
import {UrnType} from '../UrnType';

export class FieldValueType extends Urn {

    static valueOf(string: string): FieldValueType {
        const type = new FieldValueType();
        type.parse(UrnType.FIELD, string);
        return type;
    }
}
