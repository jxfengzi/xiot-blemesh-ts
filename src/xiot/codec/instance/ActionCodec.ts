import {Action} from '../../spec/instance/Action';
import {Spec} from '../../spec/constant/Spec';
import {ActionOperable} from '../../spec/operable/ActionOperable';
import {ActionType} from '../../spec/definitions/urn/ActionType';

export class ActionCodec {

    static decode(array: Array<Object>): Array<Action> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Action();
                a.iid = o[Spec.IID];
                a.type = ActionType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];
                a.in = o[Spec.IN];
                a.out = o[Spec.OUT];
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
                a.iid = o[Spec.IID];
                a.type = ActionType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];
                a.in = o[Spec.IN];
                a.out = o[Spec.OUT];
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
