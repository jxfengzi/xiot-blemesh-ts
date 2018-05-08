import {ActionDefinition} from '../../spec/definitions/ActionDefinition';
import {Spec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definitions/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';

export class ActionDefinitionCodec {

    static decode(json: Object): ActionDefinition {
        const def = new ActionDefinition();
        def.type = ActionType.valueOf(json[Spec.TYPE]);
        def.description = json[Spec.DESCRIPTION];
        def.in = DefinitionCodec.decodeProperties(json[Spec.IN]);
        def.out = DefinitionCodec.decodeProperties(json[Spec.OUT]);
        return def;
    }

    static encode(def: ActionDefinition): Object {
        const object = Object.assign({
            type: def.type.toString(),
            description: def.description,
        });

        if (def.in.length > 0) {
            object[Spec.IN] = DefinitionCodec.encodeProperties(def.in);
        }

        if (def.out.length > 0) {
            object[Spec.OUT] = DefinitionCodec.encodeProperties(def.out);
        }

        return object;
    }

    static encodeArray(actions: Array<ActionType>): Array<Object> {
        const array = [];

        actions.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
