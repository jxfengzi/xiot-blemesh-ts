import {ElementType} from '../../spec/typedef/type/impl/ElementType';
import {BlemeshSpec} from '../../spec/constant/BlemeshSpec';
import {StateDefinition} from '../../spec/definition/StateDefinition';
import {Access} from '../../spec/typedef/access/Access';
import {TypeCodec} from './TypeCodec';

export class StateDefinitionCodec {

    static decodeObject(json: Object): StateDefinition {
        const def = new StateDefinition();
        def.type = ElementType.valueOf(json[BlemeshSpec.TYPE]);
        if (! def.type.valid) {
            return null;
        }

        const includes = json[BlemeshSpec.INCLUDES];
        if (includes != null) {
            def.composite = true;
            def.includes = TypeCodec.decodeStateTypes(includes);
        } else {
            const access = json[BlemeshSpec.ACCESS];
            const fields = json[BlemeshSpec.FIELDS];
            def.composite = false;
            def.access = Access.create(access);
            def.fields = TypeCodec.decodeFieldTypes(fields);
        }

        const related = json[BlemeshSpec.RELATED_STATES];
        if (related != null) {
            def.relatedStates = TypeCodec.decodeStateTypes(related);
        }

        return def;
    }

    static encodeObject(def: StateDefinition): Object {
        const o = Object.assign({
            type: def.type.toString()
        });

        if (def.composite) {
            o[BlemeshSpec.INCLUDES] = TypeCodec.encodeStateTypes(def.includes);
        } else {
            o[BlemeshSpec.ACCESS] = def.access.toList();
            o[BlemeshSpec.FIELDS] = TypeCodec.encodeFieldTypes(def.fields);
        }

        if (def.relatedStates != null) {
            o[BlemeshSpec.RELATED_STATES] = TypeCodec.encodeStateTypes(def.relatedStates);
        }

        return o;
    }
}
