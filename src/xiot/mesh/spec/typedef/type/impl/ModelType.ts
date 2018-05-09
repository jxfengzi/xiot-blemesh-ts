import {Urn} from '../Urn';
import {UrnType} from '../UrnType';
import {ModelSide, ModelSideFromString} from './ModelSide';

export class ModelType extends Urn {

    static valueOf(string: string): ModelType {
        const type = new ModelType();
        type.parse(UrnType.MODEL, string);
        return type;
    }

    public side(): ModelSide {
        return ModelSideFromString(this.additional);
    }
}
