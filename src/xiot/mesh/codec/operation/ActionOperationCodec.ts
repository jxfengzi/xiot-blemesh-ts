import {ActionOperation} from '../../spec/operation/ActionOperation';
import {AID} from '../../spec/xid/AID';
import {BlemeshSpec} from '../../spec/constant/Spec';

export class ActionOperationCodec {

    static decodeQuery(query: Object): ActionOperation {
        const o = new ActionOperation();
        o.aid = AID.parseString(query[BlemeshSpec.AID]);
        o.in = query[BlemeshSpec.IN];
        return o;
    }

    static decodeResult(result: Object): ActionOperation {
        const o = new ActionOperation();
        o.aid = AID.parseString(result[BlemeshSpec.AID]);
        o.oid = result[BlemeshSpec.OID];
        o.status = result[BlemeshSpec.STATUS];
        if (o.status === 0) {
            o.out = result[BlemeshSpec.OUT];
        } else {
            o.description = result[BlemeshSpec.DESCRIPTION];
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
            object[BlemeshSpec.OUT] = action.out;
        } else {
            object[BlemeshSpec.DESCRIPTION] = action.description;
        }

        return object;
    }
}
