import {StateType} from '../typedef/type/impl/StateType';
import {FieldType} from '../typedef/type/impl/FieldType';
import {Access} from '../typedef/access/Access';

export class StateDefinition {

    public type: StateType;
    public composite: boolean;

    public access: Access;
    public fields: Array<FieldType>;

    public includes: Array<StateType>;
    public relatedStates: Array<StateType>;
}
