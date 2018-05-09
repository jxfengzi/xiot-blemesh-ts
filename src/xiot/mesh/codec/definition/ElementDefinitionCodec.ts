import {ElementType} from '../../spec/typedef/type/impl/ElementType';
import {ElementDefinition} from '../../spec/definition/ElementDefinition';
import {BlemeshSpec} from '../../spec/constant/BlemeshSpec';
import {TypeCodec} from './TypeCodec';

export class ElementDefinitionCodec {

    static decodeObject(json: Object): ElementDefinition {
        const def = new ElementDefinition();
        def.type = ElementType.valueOf(json[BlemeshSpec.TYPE]);
        if (! def.type.valid) {
            return null;
        }

        const models = json[BlemeshSpec.MODELS];
        if (models == null) {
            return null;
        }

        const required = models[BlemeshSpec.REQUIRED];
        const optional = models[BlemeshSpec.OPTIONAL];
        def.requiredModels = TypeCodec.decodeModelTypes(required);
        def.optionalModels = TypeCodec.decodeModelTypes(optional);

        return def;
    }

    static encodeObject(def: ElementDefinition): Object {
        const models = {};

        if (def.requiredModels !== null) {
            models[BlemeshSpec.REQUIRED] = TypeCodec.encodeModelTypes(def.requiredModels);
        }

        if (def.optionalModels !== null) {
            models[BlemeshSpec.OPTIONAL] = TypeCodec.encodeModelTypes(def.optionalModels);
        }

        return Object.assign({
            type: def.type.toString(),
            models: models
        });
    }
}
