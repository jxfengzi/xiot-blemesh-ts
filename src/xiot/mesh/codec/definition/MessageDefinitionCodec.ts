import {BlemeshSpec} from '../../spec/constant/BlemeshSpec';
import {MessageDefinition} from '../../spec/definition/MessageDefinition';
import {MessageType} from '../../spec/typedef/type/impl/MessageType';
import {TypeCodec} from './TypeCodec';

export class MessageDefinitionCodec {

    static decodeObject(json: Object): MessageDefinition {
        const def = new MessageDefinition();
        def.type = MessageType.valueOf(json[BlemeshSpec.TYPE]);
        if (! def.type.valid) {
            return null;
        }

        const opcode = json[BlemeshSpec.OPCODE];
        if (opcode == null) {
            return null;
        }

        def.opcode = MessageDefinitionCodec.decodeOpcode(opcode);

        const response = json[BlemeshSpec.RESPONSE];
        if (response != null) {
            def.response = MessageType.valueOf(response);
            if (! def.response.valid) {
                return null;
            }
        }

        const fields = json[BlemeshSpec.FIELDS];
        if (fields != null) {
            const required = fields[BlemeshSpec.REQUIRED];
            const optional = fields[BlemeshSpec.OPTIONAL];

            if (required != null) {
                def.requiredFields = TypeCodec.decodeFieldTypes(required);
            }

            if (optional != null) {
                def.optionalFields = TypeCodec.decodeFieldTypes(optional);
            }
        }

        return def;
    }

    static encodeObject(def: MessageDefinition): Object {
        const o = Object.assign({
            type: def.type.toString(),
            opcode: MessageDefinitionCodec.encodeOpcode(def.opcode)
        });

        if (def.requiredFields != null || def.optionalFields != null) {
            const fields = {};

            if (def.requiredFields !== null) {
                fields[BlemeshSpec.REQUIRED] = TypeCodec.encodeFieldTypes(def.requiredFields);
            }

            if (def.optionalFields !== null) {
                fields[BlemeshSpec.OPTIONAL] = TypeCodec.encodeFieldTypes(def.optionalFields);
            }

            o[BlemeshSpec.FIELDS] = fields;
        }

        if (def.response != null) {
            o[BlemeshSpec.RESPONSE] = def.response.toString();
        }

        return o;
    }

    static decodeOpcode(array: Array<string>): Array<Number> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(Number.parseInt(v, 16));
            }
        }

        return list;
    }

    static encodeOpcode(array: Array<Number>): Array<string> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(v.toString(16));
            }
        }

        return list;
    }
}
