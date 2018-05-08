import {PropertyDefinition} from '../../spec/definitions/PropertyDefinition';
import {Spec} from '../../spec/constant/Spec';
import {PropertyType} from '../../spec/definitions/urn/PropertyType';
import {DataFormatFromString, DataFormatToString} from '../../spec/definitions/property/data/DataFormat';
import {Access} from '../../spec/definitions/property/Access';
import {DefinitionCodec} from './DefinitionCodec';
import {Unit, UnitFromString, UnitToString} from '../../spec/definitions/property/Unit';
import {ValueList} from '../../spec/definitions/property/ValueList';
import {ValueRange} from '../../spec/definitions/property/ValueRange';

export class PropertyDefinitionCodec {

    static decode(json: Object): PropertyDefinition {
        const def = new PropertyDefinition();
        def.type = PropertyType.valueOf(json[Spec.TYPE]);
        def.description = json[Spec.DESCRIPTION];
        def.format = DataFormatFromString(json[Spec.FORMAT]);
        def.access = Access.create(json[Spec.ACCESS]);
        def.constraintValue = null;
        def.unit = UnitFromString(json[Spec.UNIT]);

        if (json.hasOwnProperty(Spec.VALUE_LIST) && json.hasOwnProperty(Spec.VALUE_RANGE)) {
            throw new Error('value-list & value-range both exist!');
        }

        if (json.hasOwnProperty(Spec.VALUE_LIST)) {
            def.constraintValue = DefinitionCodec.decodeValueList(def.format, json[Spec.VALUE_LIST]);
        }

        if (json.hasOwnProperty(Spec.VALUE_RANGE)) {
            def.constraintValue = DefinitionCodec.decodeValueRange(def.format, json[Spec.VALUE_RANGE]);
        }

        return def;
    }

    static encode(def: PropertyDefinition): Object {
        const object = Object.assign({
            type: def.type.toString(),
            description: def.description,
            format: DataFormatToString(def.format),
            access: def.access.toList(),
        });

        if (def.constraintValue != null) {
            if (def.constraintValue instanceof ValueList) {
                object[Spec.VALUE_LIST] = def.constraintValue.toJsonArray();
            }

            if (def.constraintValue instanceof ValueRange) {
                object[Spec.VALUE_RANGE] = def.constraintValue.toJsonArray();
            }
        }

        if (def.unit !== Unit.NONE) {
            object[Spec.UNIT] = UnitToString(def.unit);
        }

        return object;
    }

    static encodeArray(properties: Array<PropertyType>): Array<Object> {
        const array = [];

        properties.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
