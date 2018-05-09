import {Urn} from '../Urn';
import {UrnType} from '../UrnType';

export class FieldType extends Urn {

    static valueOf(string: string): FieldType {
        const type = new FieldType();
        type.parse(UrnType.FIELD, string);
        return type;
    }
}
