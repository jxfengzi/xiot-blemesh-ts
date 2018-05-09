import {BlemeshSpec} from '../../spec/constant/BlemeshSpec';
import {ModelType} from '../../spec/typedef/type/impl/ModelType';
import {ModelDefinition} from '../../spec/definition/ModelDefinition';
import {ModelSide} from '../../spec/typedef/type/impl/ModelSide';
import {TypeCodec} from './TypeCodec';

export class ModelDefinitionCodec {

    static decodeObject(json: Object): ModelDefinition {
        const def = new ModelDefinition();
        def.type = ModelType.valueOf(json[BlemeshSpec.TYPE]);
        if (! def.type.valid) {
            return null;
        }

        const id = json[BlemeshSpec.ID];
        if (id == null) {
            return null;
        }
        def.id = Number.parseInt(id, 16);

        const extend = json[BlemeshSpec.EXTEND_MODLES];
        if (extend != null) {
            def.extendModels = TypeCodec.decodeModelTypes(extend);
        }

        const states = json[BlemeshSpec.STATES];
        if (states != null) {
            const required = states[BlemeshSpec.REQUIRED];
            const optional = states[BlemeshSpec.OPTIONAL];

            if (required != null) {
                def.requiredStates = TypeCodec.decodeStateTypes(required);
            }

            if (optional != null) {
                def.optionalStates = TypeCodec.decodeStateTypes(optional);
            }
        }

        const messages = json[BlemeshSpec.MESSAGES];
        if (messages != null) {
            const required = messages[BlemeshSpec.REQUIRED];
            const optional = messages[BlemeshSpec.OPTIONAL];

            if (required != null) {
                def.requiredMessages = TypeCodec.decodeMessageTypes(required);
            }

            if (optional != null) {
                def.optionalMessages = TypeCodec.decodeMessageTypes(optional);
            }
        }

        if (def.type.side() === ModelSide.SERVER) {
            const client = json[BlemeshSpec.CLIENT];
            def.client = ModelType.valueOf(client);
            if (! def.client.valid) {
                return null;
            }
        }

        return def;
    }

    static encodeObject(def: ModelDefinition): Object {
        const o = Object.assign({
            type: def.type.toString(),
            id: def.id.toString(16),
        });

        if (def.extendModels !== null) {
            o[BlemeshSpec.EXTEND_MODLES] = TypeCodec.encodeModelTypes(def.extendModels);
        }

        if (def.requiredStates !== null || def.optionalStates !== null) {
            const states = Object.assign({});

            if (def.requiredStates !== null) {
                states[BlemeshSpec.REQUIRED] = TypeCodec.encodeStateTypes(def.requiredStates);
            }

            if (def.optionalStates !== null) {
                states[BlemeshSpec.OPTIONAL] = TypeCodec.encodeStateTypes(def.optionalStates);
            }

            o[BlemeshSpec.STATES] = states;
        }

        if (def.requiredMessages !== null || def.optionalMessages !== null) {
            const messages = Object.assign({});

            if (def.requiredMessages !== null) {
                messages[BlemeshSpec.REQUIRED] = TypeCodec.encodeStateTypes(def.requiredMessages);
            }

            if (def.optionalMessages !== null) {
                messages[BlemeshSpec.OPTIONAL] = TypeCodec.encodeStateTypes(def.optionalMessages);
            }

            o[BlemeshSpec.MESSAGES] = messages;
        }

        if (def.client != null) {
            o[BlemeshSpec.CLIENT] = def.client.toString();
        }

        return o;
    }
}
