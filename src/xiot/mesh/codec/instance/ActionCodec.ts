import {Action} from '../../spec/instance/Action';
import {BlemeshSpec} from '../../spec/constant/Spec';
import {ActionOperable} from '../../spec/operable/ActionOperable';
import {ActionType} from '../../spec/definitions/urn/ActionType';

export class ActionCodec {

    static decode(array: Array<Object>): Array<Action> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Action();
                a.iid = o[BlemeshSpec.IID];
                a.type = ActionType.valueOf(o[BlemeshSpec.TYPE]);
                a.description = o[BlemeshSpec.DESCRIPTION];
                a.in = o[BlemeshSpec.IN];
                a.out = o[BlemeshSpec.OUT];
                list.push(a);
            }
        }

        return list;
    }

    static decodeOperable(array: Array<Object>): Array<ActionOperable> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new ActionOperable();
                a.iid = o[BlemeshSpec.IID];
                a.type = ActionType.valueOf(o[BlemeshSpec.TYPE]);
                a.description = o[BlemeshSpec.DESCRIPTION];
                a.in = o[BlemeshSpec.IN];
                a.out = o[BlemeshSpec.OUT];
                list.push(a);
            }
        }

        return list;
    }

    static encode(action: Action): Object {
        return Object.assign({
            iid: action.iid,
            type: action.type.toString(),
            description: action.description,
            in: action.in,
            out: action.out
        });
    }

    static encodeArray(actions: Map<Number, Action>): Array<Object> {
        const array = [];

        actions.forEach((action) => {
            array.push(ActionCodec.encode(action));
        });

        return array;
    }
}
