import {BlemeshSpec} from '../../spec/constant/Spec';
import {DefinitionCodec} from './DefinitionCodec';
import {ServiceDefinition} from '../../spec/definitions/ServiceDefinition';
import {ServiceType} from '../../spec/definitions/urn/ServiceType';
import {PropertyDefinitionCodec} from './PropertyDefinitionCodec';
import {ActionDefinitionCodec} from './ActionDefinitionCodec';
import {EventDefinitionCodec} from './EventDefinitionCodec';

export class ServiceDefinitionCodec {

    static decode(json: Object): ServiceDefinition {
        const def = new ServiceDefinition();
        def.type = ServiceType.valueOf(json[BlemeshSpec.TYPE]);
        def.description = json[BlemeshSpec.DESCRIPTION];
        def.requiredProperties = DefinitionCodec.decodeProperties(json[BlemeshSpec.REQUIRED_PROPERTIES]);
        def.optionalProperties = DefinitionCodec.decodeProperties(json[BlemeshSpec.OPTIONAL_PROPERTIES]);
        def.requiredActions = DefinitionCodec.decodeActions(json[BlemeshSpec.REQUIRED_ACTIONS]);
        def.optionalActions = DefinitionCodec.decodeActions(json[BlemeshSpec.OPTIONAL_ACTIONS]);
        def.requiredEvents = DefinitionCodec.decodeEvents(json[BlemeshSpec.REQUIRED_EVENTS]);
        def.optionalEvents = DefinitionCodec.decodeEvents(json[BlemeshSpec.OPTIONAL_EVENTS]);
        return def;
    }

    static encode(def: ServiceDefinition): Object {
        const object = Object.assign({
            type: def.type.toString(),
            description: def.description
        });

        if (def.requiredProperties.length > 0) {
            object[BlemeshSpec.REQUIRED_PROPERTIES] = PropertyDefinitionCodec.encodeArray(def.requiredProperties);
        }

        if (def.optionalProperties.length > 0) {
            object[BlemeshSpec.OPTIONAL_PROPERTIES] = PropertyDefinitionCodec.encodeArray(def.optionalProperties);
        }

        if (def.requiredActions.length > 0) {
            object[BlemeshSpec.REQUIRED_ACTIONS] = ActionDefinitionCodec.encodeArray(def.requiredActions);
        }

        if (def.optionalActions.length > 0) {
            object[BlemeshSpec.OPTIONAL_ACTIONS] = ActionDefinitionCodec.encodeArray(def.optionalActions);
        }

        if (def.requiredEvents.length > 0) {
            object[BlemeshSpec.REQUIRED_EVENTS] = EventDefinitionCodec.encodeArray(def.requiredEvents);
        }

        if (def.optionalEvents.length > 0) {
            object[BlemeshSpec.OPTIONAL_EVENTS] = EventDefinitionCodec.encodeArray(def.optionalEvents);
        }

        return object;
    }

    static encodeArray(services: Array<ServiceType>): Array<Object> {
        const array = [];

        services.forEach((type) => {
            array.push(type.toString());
        });

        return array;
    }
}
