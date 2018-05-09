import {ElementType} from '../typedef/type/impl/ElementType';
import {ModelType} from '../typedef/type/impl/ModelType';

export class ElementDefinition {

    public type: ElementType;
    public requiredModels: Array<ModelType>;
    public optionalModels: Array<ModelType>;
}
