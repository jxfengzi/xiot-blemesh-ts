import {ActionOperation} from '../../spec/operation/ActionOperation';
import {AID} from '../../spec/xid/AID';
import {Spec} from '../../spec/constant/Spec';

export class ActionOperationCodec {

    static decodeQuery(query: Object): ActionOperation {
        const o = new ActionOperation();
        o.aid = AID.parseString(query[Spec.AID]);
        o.in = query[Spec.IN];
        return o;
    }

    static decodeResult(result: Object): ActionOperation {
        const o = new ActionOperation();
        o.aid = AID.parseString(result[Spec.AID]);
        o.oid = result[Spec.OID];
        o.status = result[Spec.STATUS];
        if (o.status === 0) {
            o.out = result[Spec.OUT];
        } else {
            o.description = result[Spec.DESCRIPTION];
        }

        return o;
    }

    static encodeQuery(action: ActionOperation): Object {
        return Object.assign({
            aid: action.aid.toString(),
            in: action.in
        });
    }

    static encodeResult(action: ActionOperation): Object {
        const object = Object.assign({
            aid: action.aid.toString(),
            oid: action.oid,
            status: action.status
        });

        if (action.status === 0) {
            object[Spec.OUT] = action.out;
        } else {
            object[Spec.DESCRIPTION] = action.description;
        }

        return object;
    }
}
