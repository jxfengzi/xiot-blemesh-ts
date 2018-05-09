import {BlemeshSpec} from '../../spec/constant/BlemeshSpec';
import {NodeDefinition} from '../../spec/definition/NodeDefinition';
import {NodeType} from '../../spec/typedef/type/impl/NodeType';
import {TypeCodec} from './TypeCodec';

export class NodeDefinitionCodec {

    static decodeObject(json: Object): NodeDefinition {
        const def = new NodeDefinition();
        def.type = NodeType.valueOf(json[BlemeshSpec.TYPE]);
        if (! def.type.valid) {
            return null;
        }

        const elements = json[BlemeshSpec.ELEMENTS];
        if (elements == null) {
            return null;
        }

        const required = elements[BlemeshSpec.REQUIRED];
        const optional = elements[BlemeshSpec.OPTIONAL];
        def.requiredElements = TypeCodec.decodeElementTypes(required);
        def.optionalElements = TypeCodec.decodeElementTypes(optional);

        return def;
    }

    static encodeObject(def: NodeDefinition): Object {
        const elements = {};

        if (def.requiredElements !== null) {
            elements[BlemeshSpec.REQUIRED] = TypeCodec.encodeElementTypes(def.requiredElements);
        }

        if (def.optionalElements !== null) {
            elements[BlemeshSpec.OPTIONAL] = TypeCodec.encodeElementTypes(def.optionalElements);
        }

        return Object.assign({
            type: def.type.toString(),
            elements: elements
        });
    }
}
