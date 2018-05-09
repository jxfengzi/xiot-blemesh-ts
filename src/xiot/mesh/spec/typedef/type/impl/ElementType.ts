import {Urn} from '../Urn';
import {UrnType} from '../UrnType';

export class ElementType extends Urn {

    static valueOf(string: string): ElementType {
        const type = new ElementType();
        type.parse(UrnType.ELEMENT, string);
        return type;
    }
}
