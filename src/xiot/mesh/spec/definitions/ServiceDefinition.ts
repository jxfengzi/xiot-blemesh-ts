import {ServiceType} from './urn/ServiceType';
import {PropertyType} from './urn/PropertyType';
import {ActionType} from './urn/ActionType';
import {EventType} from './urn/EventType';

export class ServiceDefinition {
  public type: ServiceType;
  public description: string;
  public requiredProperties: Array<PropertyType>;
  public optionalProperties: Array<PropertyType>;
  public requiredActions: Array<ActionType>;
  public optionalActions: Array<ActionType>;
  public requiredEvents: Array<EventType>;
  public optionalEvents: Array<EventType>;
}
