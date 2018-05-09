import {EventType} from './urn/EventType';
import {PropertyType} from './urn/PropertyType';

export class EventDefinition {
  public type: EventType;
  public description: string;
  public arguments: Array<PropertyType>;
}
