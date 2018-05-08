import {ActionType} from './urn/ActionType';
import {PropertyType} from './urn/PropertyType';

export class ActionDefinition {
    public type: ActionType;
    public description: string;
    public in: Array<PropertyType>;
    public out: Array<PropertyType>;
}
