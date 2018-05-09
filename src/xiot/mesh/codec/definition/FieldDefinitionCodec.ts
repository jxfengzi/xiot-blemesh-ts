import {BlemeshSpec} from '../../spec/constant/BlemeshSpec';
import {FieldDefinition} from '../../spec/definition/FieldDefinition';
import {FieldType} from '../../spec/typedef/type/impl/FieldType';
import {ValueConstraintCodec} from './ValueConstraintCodec';
import {TypeCodec} from './TypeCodec';

export class FieldDefinitionCodec {

    static decodeObject(json: Object): FieldDefinition {
        const def = new FieldDefinition();
        def.type = FieldType.valueOf(json[BlemeshSpec.TYPE]);
        if (! def.type.valid) {
            return null;
        }

        def.bits = json[BlemeshSpec.BITS];
        if (def.bits == null) {
            return null;
        }

        const fieldValues = json[BlemeshSpec.FIELD_VALUES];
        if (fieldValues != null) {
            def.values = TypeCodec.decodeFieldTypes(fieldValues);
        } else {
            if (! ValueConstraintCodec.decodeObject(def, json)) {
                return null;
            }
        }

        return def;
    }

    static encodeObject(def: FieldDefinition): Object {
        const o = Object.assign({
            type: def.type.toString(),
            bits: def.bits
        });

        if (def.values !== null) {
            o[BlemeshSpec.FIELD_VALUES] = TypeCodec.encodeFieldTypes(def.values);
        } else {
            ValueConstraintCodec.encodeObject(def, o);
        }

        return o;
    }
}
