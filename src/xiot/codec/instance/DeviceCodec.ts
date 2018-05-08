import {Spec} from '../../spec/constant/Spec';
import {Device} from '../../spec/instance/Device';
import {DeviceOperable} from '../../spec/operable/DeviceOperable';
import {DeviceType} from '../../spec/definitions/urn/DeviceType';
import {ServiceCodec} from './ServiceCodec';

export class DeviceCodec {

    static decode(json: Object): Device {
        const device = new Device();
        device.type = DeviceType.valueOf(json[Spec.TYPE]);
        device.description = json[Spec.DESCRIPTION];
        const services = ServiceCodec.decode(json[Spec.SERVICES]);
        for (const service of services) {
            device.services.set(service.iid, service);
        }

        return device;
    }

    static decodeOperable(json: Object): DeviceOperable {
        const device = new DeviceOperable();
        device.type = DeviceType.valueOf(json[Spec.TYPE]);
        device.description = json[Spec.DESCRIPTION];
        const services = ServiceCodec.decodeOperable(json[Spec.SERVICES]);
        for (const service of services) {
            device.services.set(service.iid, service);
        }

        return device;
    }

    static encode(device: Device): Object {
        return Object.assign({
            type: device.type.toString(),
            description: device.description,
            services: ServiceCodec.encodeArray(device.services)
        });
    }
}
