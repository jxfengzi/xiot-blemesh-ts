import {BlemeshSpec} from '../../spec/constant/BlemeshSpec';
import {FieldValueDefinition} from '../../spec/definition/FieldValueDefinition';
import {FieldValueType} from '../../spec/typedef/type/impl/FieldValueType';
import {ValueConstraintCodec} from './ValueConstraintCodec';

export class FieldValueDefinitionCodec {

    static decodeObject(json: Object): FieldValueDefinition {
        const def = new FieldValueDefinition();
        def.type = FieldValueType.valueOf(json[BlemeshSpec.TYPE]);
        if (! def.type.valid) {
            return null;
        }

        def.bits = json[BlemeshSpec.BITS];
        if (def.bits == null) {
            return null;
        }

        if (! ValueConstraintCodec.decodeObject(def, json)) {
            return null;
        }

        return def;
    }

    static encodeObject(def: FieldValueDefinition): Object {
        const o = Object.assign({
            type: def.type.toString(),
            bits: def.bits
        });

        ValueConstraintCodec.encodeObject(def, o);

        return o;
    }
}