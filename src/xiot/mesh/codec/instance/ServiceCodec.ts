import {BlemeshSpec} from '../../spec/constant/Spec';
import {Service} from '../../spec/instance/Service';
import {ServiceType} from '../../spec/definitions/urn/ServiceType';
import {PropertyCodec} from './PropertyCodec';
import {ActionCodec} from './ActionCodec';
import {EventCodec} from './EventCodec';
import {ServiceOperable} from '../../spec/operable/ServiceOperable';

export class ServiceCodec {

    static decode(array: Array<Object>): Array<Service> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Service();
                a.iid = o[BlemeshSpec.IID];
                a.type = ServiceType.valueOf(o[BlemeshSpec.TYPE]);
                a.description = o[BlemeshSpec.DESCRIPTION];

                const properties = PropertyCodec.decode(o[BlemeshSpec.PROPERTIES]);
                for (const property of properties) {
                    a.properties.set(property.iid, property);
                }

                const actions = ActionCodec.decode(o[BlemeshSpec.ACTIONS]);
                for (const action of actions) {
                    a.actions.set(action.iid, action);
                }

                const events = EventCodec.decode(o[BlemeshSpec.EVENTS]);
                for (const event of events) {
                    a.events.set(event.iid, event);
                }

                list.push(a);
            }
        }

        return list;
    }

    static decodeOperable(array: Array<Object>): Array<ServiceOperable> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new ServiceOperable();
                a.iid = o[BlemeshSpec.IID];
                a.type = ServiceType.valueOf(o[BlemeshSpec.TYPE]);
                a.description = o[BlemeshSpec.DESCRIPTION];

                const properties = PropertyCodec.decodeOperable(o[BlemeshSpec.PROPERTIES]);
                for (const property of properties) {
                    a.properties.set(property.iid, property);
                }

                const actions = ActionCodec.decodeOperable(o[BlemeshSpec.ACTIONS]);
                for (const action of actions) {
                    a.actions.set(action.iid, action);
                }

                const events = EventCodec.decode(o[BlemeshSpec.EVENTS]);
                for (const event of events) {
                    a.events.set(event.iid, event);
                }

                list.push(a);
            }
        }

        return list;
    }

    static encode(service: Service): Object {
        const object = Object.assign({
            iid: service.iid,
            type: service.type.toString(),
            description: service.description,
        });

        if (service.properties.size > 0) {
            object[BlemeshSpec.PROPERTIES] = PropertyCodec.encodeArray(service.properties);
        }

        if (service.actions.size > 0) {
            object[BlemeshSpec.ACTIONS] = ActionCodec.encodeArray(service.actions);
        }

        if (service.events.size > 0) {
            object[BlemeshSpec.EVENTS] = EventCodec.encodeArray(service.events);
        }

        return object;
    }

    static encodeArray(services: Map<Number, Service>): Array<Object> {
        const array = [];

        services.forEach((service) => {
            array.push(ServiceCodec.encode(service));
        });

        return array;
    }
}
