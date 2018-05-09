import {BlemeshSpec} from '../../spec/constant/Spec';
import {DefinitionCodec} from './DefinitionCodec';
import {DeviceDefinition} from '../../spec/definitions/DeviceDefinition';
import {DeviceType} from '../../spec/definitions/urn/DeviceType';
import {ServiceDefinitionCodec} from './ServiceDefinitionCodec';

export class DeviceDefinitionCodec {

    static decode(json: Object): DeviceDefinition {
        const def = new DeviceDefinition();
        def.type = DeviceType.valueOf(json[BlemeshSpec.TYPE]);
        def.description = json[BlemeshSpec.DESCRIPTION];
        def.requiredServices = DefinitionCodec.decodeServices(json[BlemeshSpec.REQUIRED_SERVICES]);
        def.optionalServices = DefinitionCodec.decodeServices(json[BlemeshSpec.OPTIONAL_SERVICES]);
        return def;
    }

    static encode(def: DeviceDefinition): Object {
        const object = Object.assign({
            type: def.type.toString(),
            description: def.description
        });

        if (def.requiredServices.length > 0) {
            object[BlemeshSpec.REQUIRED_SERVICES] = ServiceDefinitionCodec.encodeArray(def.requiredServices);
        }

        if (def.optionalServices.length > 0) {
            object[BlemeshSpec.OPTIONAL_SERVICES] = ServiceDefinitionCodec.encodeArray(def.optionalServices);
        }

        return object;
    }
}
