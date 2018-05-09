import {AbstractFieldValue} from '../../spec/definition/AbstractFieldValue';
import {BlemeshSpec} from '../../spec/constant/BlemeshSpec';
import {ValueConstraint} from '../../spec/typedef/value/ValueConstraint';
import {Value} from '../../spec/typedef/value/Value';
import {ValueRange} from '../../spec/typedef/value/ValueRange';
import {ValueFormat, ValueFormatFromString} from '../../spec/typedef/format/ValueFormat';
import {ValueList} from '../../spec/typedef/value/ValueList';

export class ValueConstraintCodec {

    static decodeObject(def: AbstractFieldValue, o: Object): boolean {
        def.format = ValueFormatFromString(o[BlemeshSpec.FORMAT]);
        if (def.format === ValueFormat.UNKNOWN) {
            return false;
        }

        const list = o[BlemeshSpec.VALUE_LIST];
        const range = o[BlemeshSpec.VALUE_RANGE];
        if (list != null && range != null) {
            return false;
        }

        if (list != null) {
            def.constraint = ValueConstraint.LIST;
            const values = new ValueList();
            values.values = [];

            for (const v of list) {
                const valueKey = v[BlemeshSpec.VALUE];
                const rangeKey = v[BlemeshSpec.VALUE_RANGE];

                if (valueKey != null && rangeKey != null) {
                    return false;
                }

                if (valueKey != null) {
                    const vv = new Value();

                    vv.hex = v[BlemeshSpec.VALUE];
                    vv.description = v[BlemeshSpec.DESCRIPTION];

                    values.values.push(vv);
                }

                if (rangeKey != null) {
                    const r = v[BlemeshSpec.VALUE_RANGE];

                    if (r.length !== 2) {
                        return false;
                    }

                    const vv = new ValueRange();
                    vv.minHex = r[0];
                    vv.maxHex = r[1];
                    vv.description = v[BlemeshSpec.DESCRIPTION];

                    values.values.push(vv);
                }
            }

            def.list = values;
        }

        if (range != null) {
            def.constraint = ValueConstraint.RANGE;

            if (range.length !== 2) {
                return false;
            }

            const v = new ValueRange();
            v.minHex = range[0];
            v.maxHex = range[1];

            def.range = v;
        }

        return true;
    }

    static encodeObject(def: AbstractFieldValue, o: Object): void {
        o[BlemeshSpec.FORMAT] = def.format.toString();

        switch (def.constraint) {
            case ValueConstraint.RANGE: {
                const range = [];
                range.push(def.range.minHex);
                range.push(def.range.maxHex);
                o[BlemeshSpec.VALUE_RANGE] = range;
                break;
            }

            case ValueConstraint.LIST: {
                const list = [];

                for (const v of def.list.values) {
                    const value = {};

                    if (v instanceof Value) {
                        value[BlemeshSpec.VALUE] = v.hex;
                        value[BlemeshSpec.DESCRIPTION] = v.description;
                    } else if (v instanceof ValueRange) {
                        const range = [];
                        range.push(v.minHex);
                        range.push(v.maxHex);

                        value[BlemeshSpec.VALUE_RANGE] = range;
                        value[BlemeshSpec.DESCRIPTION] = v.description;
                    }

                    list.push(value);
                }

                o[BlemeshSpec.VALUE_LIST] = list;
                break;
            }
        }
    }
}
