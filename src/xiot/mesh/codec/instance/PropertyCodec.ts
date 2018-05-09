import {Property} from '../../spec/instance/Property';
import {PropertyOperable} from '../../spec/operable/PropertyOperable';
import {BlemeshSpec} from '../../spec/constant/Spec';
import {PropertyDefinitionCodec} from '../definition/PropertyDefinitionCodec';
import {DataFormatToString} from '../../spec/definitions/property/data/DataFormat';
import {ValueList} from '../../spec/definitions/property/ValueList';
import {ValueRange} from '../../spec/definitions/property/ValueRange';
import {Unit, UnitToString} from '../../spec/definitions/property/Unit';

export class PropertyCodec {

    static decode(array: Array<Object>): Array<Property> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const p = new Property();
                p.iid = o[BlemeshSpec.IID];
                p.definition = PropertyDefinitionCodec.decode(o);
                list.push(p);
            }
        }

        return list;
    }

    static decodeOperable(array: Array<Object>): Array<PropertyOperable> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const p = new PropertyOperable();
                p.iid = o[BlemeshSpec.IID];
                p.definition = PropertyDefinitionCodec.decode(o);
                list.push(p);
            }
        }

        return list;
    }

    static encode(property: Property): Object {
        const object = Object.assign({
            iid: property.iid,
            type: property.definition.type.toString(),
            description: property.definition.description,
            format: DataFormatToString(property.definition.format),
            access: property.definition.access.toList()
        });

        if (property.definition.constraintValue != null) {
            if (property.definition.constraintValue instanceof ValueList) {
                object[BlemeshSpec.VALUE_LIST] = property.definition.constraintValue.toJsonArray();
            }

            if (property.definition.constraintValue instanceof ValueRange) {
                object[BlemeshSpec.VALUE_RANGE] = property.definition.constraintValue.toJsonArray();
            }
        }

        if (property.definition.unit !== Unit.NONE) {
            object[BlemeshSpec.UNIT] = UnitToString(property.definition.unit);
        }

        return object;
    }

    static encodeArray(properties: Map<Number, Property>): Array<Object> {
        const array = [];

        properties.forEach((property) => {
            array.push(PropertyCodec.encode(property));
        });

        return array;
    }
}
