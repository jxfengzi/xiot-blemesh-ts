import {MessageType} from '../typedef/type/impl/MessageType';
import {ModelType} from '../typedef/type/impl/ModelType';
import {StateType} from '../typedef/type/impl/StateType';

export class ModelDefinition {

    public id: number;
    public type: ModelType;
    public extendModels: Array<ModelType>;
    public requiredStates: Array<StateType>;
    public optionalStates: Array<StateType>;
    public requiredMessages: Array<MessageType>;
    public optionalMessages: Array<MessageType>;
    public client: ModelType;
}
