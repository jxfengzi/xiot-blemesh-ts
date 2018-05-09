import {Urn} from './Urn';
import {UrnType} from './UrnType';

export class ActionType extends Urn {

    static valueOf(string: string): ActionType {
        let thiz = new ActionType();

        if (!thiz.parse(UrnType.ACTION, string)) {
            thiz = undefined;
        }

        return thiz;
    }
}
