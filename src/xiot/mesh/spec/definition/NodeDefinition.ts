import {NodeType} from '../typedef/type/impl/NodeType';
import {ElementType} from '../typedef/type/impl/ElementType';

export class NodeDefinition {

    public type: NodeType;
    public requiredElements: Array<ElementType>;
    public optionalElements: Array<ElementType>;
}
