import {BlemeshSpec} from '../../spec/constant/Spec';
import {ActionType} from '../../spec/definitions/urn/ActionType';
import {DefinitionCodec} from './DefinitionCodec';
import {EventDefinition} from '../../spec/definitions/EventDefinition';
import {EventType} from '../../spec/definitions/urn/EventType';

export class EventDefinitionCodec {

    static decode(json: Object): EventDefinition {
        const def = new EventDefinition();
        def.type = ActionType.valueOf(json[BlemeshSpec.TYPE]);
        def.description = json[BlemeshSpec.DESCRIPTION];
        def.arguments = DefinitionCodec.decodeProperties(json[BlemeshSpec.ARGUMENTS]);
        return def;
    }

    static encode(def: EventDefinition): Object {
        const object = Object.assign({
            type: def.type.toString(),
            description: def.description,
        });

        if (def.arguments.length > 0) {
            object[BlemeshSpec.IN] = DefinitionCodec.encodeProperties(def.arguments);
        }

        return object;
    }

    static encodeArray(events: Array<EventType>): Array<Object> {
        const array = [];

        events.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
