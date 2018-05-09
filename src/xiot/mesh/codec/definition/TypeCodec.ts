import {FieldType} from '../../spec/typedef/type/impl/FieldType';
import {StateType} from '../../spec/typedef/type/impl/StateType';
import {ModelType} from '../../spec/typedef/type/impl/ModelType';
import {ElementType} from '../../spec/typedef/type/impl/ElementType';
import {MessageType} from '../../spec/typedef/type/impl/MessageType';


export class TypeCodec {

    static decodeModelTypes(array: Array<string>): Array<ModelType> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(ModelType.valueOf(v));
            }
        }

        return list;
    }

    static decodeElementTypes(array: Array<string>): Array<ElementType> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(ElementType.valueOf(v));
            }
        }

        return list;
    }

    static decodeStateTypes(array: Array<string>): Array<StateType> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(StateType.valueOf(v));
            }
        }

        return list;
    }

    static decodeMessageTypes(array: Array<string>): Array<MessageType> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(MessageType.valueOf(v));
            }
        }

        return list;
    }

    static decodeFieldTypes(array: Array<string>): Array<FieldType> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(StateType.valueOf(v));
            }
        }

        return list;
    }

    static encodeStateTypes(array: Array<StateType>): Array<string> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(v.toString());
            }
        }

        return list;
    }

    static encodeFieldTypes(array: Array<FieldType>): Array<string> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(v.toString());
            }
        }

        return list;
    }


    static encodeElementTypes(array: Array<ElementType>): Array<string> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(v.toString());
            }
        }

        return list;
    }

    static encodeModelTypes(array: Array<ModelType>): Array<string> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(v.toString());
            }
        }

        return list;
    }

    static encodeMessageTypes(array: Array<MessageType>): Array<string> {
        const list = [];

        if (array != null) {
            for (const v of array) {
                list.push(v.toString());
            }
        }

        return list;
    }
}
