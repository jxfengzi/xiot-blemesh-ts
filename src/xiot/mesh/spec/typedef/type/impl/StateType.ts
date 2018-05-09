import {Urn} from '../Urn';
import {UrnType} from '../UrnType';

export class StateType extends Urn {

    static valueOf(string: string): StateType {
        const type = new StateType();
        type.parse(UrnType.STATE, string);
        return type;
    }
}
