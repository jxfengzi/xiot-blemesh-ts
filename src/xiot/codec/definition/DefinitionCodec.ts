import {DataFormat} from '../../spec/definitions/property/data/DataFormat';
import {ValueList} from '../../spec/definitions/property/ValueList';
import {ValueRange} from '../../spec/definitions/property/ValueRange';
import {PropertyType} from '../../spec/definitions/urn/PropertyType';
import {ServiceType} from '../../spec/definitions/urn/ServiceType';
import {ActionType} from '../../spec/definitions/urn/ActionType';
import {EventType} from '../../spec/definitions/urn/EventType';
import {ValueDefinition} from '../../spec/definitions/property/ValueDefinition';
import {Spec} from '../../spec/constant/Spec';

export class DefinitionCodec {

  static decodeValueList(format: DataFormat, array: Array<Object>): ValueList {
    const list = new ValueList();

      if (array != null) {
          for (const v of array) {
              if (v.hasOwnProperty('value') && v.hasOwnProperty('description')) {
                  list.values.push(new ValueDefinition(format, v[Spec.VALUE], v[Spec.DESCRIPTION]));
              }
          }
      }

    return list;
  }

  static decodeValueRange(format: DataFormat, range: Array<Object>): ValueRange {
    return new ValueRange(format, range);
  }

  static decodeProperties(array: Array<string>): Array<PropertyType> {
    const list = [];

    if (array != null) {
        for (const v of array) {
            list.push(PropertyType.valueOf(v));
        }
    }

    return list;
  }

  static decodeServices(array: Array<string>): Array<ServiceType> {
    const list = [];

    if (array != null) {
        for (const v of array) {
            list.push(ServiceType.valueOf(v));
        }
    }

    return list;
  }

  static decodeActions(array: Array<string>): Array<ActionType> {
    const list = [];

      if (array != null) {
          for (const v of array) {
              list.push(ActionType.valueOf(v));
          }
      }

    return list;
  }

  static decodeEvents(array: Array<string>): Array<EventType> {
    const list = [];

      if (array != null) {
          for (const v of array) {
              list.push(EventType.valueOf(v));
          }
      }

    return list;
  }

  static encodeProperties(array: Array<PropertyType>): Array<string> {
      const list = [];

      if (array != null) {
          for (const v of array) {
              list.push(v.toString());
          }
      }

      return list;
  }
}
