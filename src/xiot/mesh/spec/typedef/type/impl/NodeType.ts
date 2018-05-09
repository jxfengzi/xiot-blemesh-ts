import {Urn} from '../Urn';
import {UrnType} from '../UrnType';

export class NodeType extends Urn {

    static valueOf(string: string): NodeType {
        const type = new NodeType();
        type.parse(UrnType.NODE, string);
        return type;
    }
}
