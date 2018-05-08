import {Spec} from '../../spec/constant/Spec';
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
                a.iid = o[Spec.IID];
                a.type = ServiceType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];

                const properties = PropertyCodec.decode(o[Spec.PROPERTIES]);
                for (const property of properties) {
                    a.properties.set(property.iid, property);
                }

                const actions = ActionCodec.decode(o[Spec.ACTIONS]);
                for (const action of actions) {
                    a.actions.set(action.iid, action);
                }

                const events = EventCodec.decode(o[Spec.EVENTS]);
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
                a.iid = o[Spec.IID];
                a.type = ServiceType.valueOf(o[Spec.TYPE]);
                a.description = o[Spec.DESCRIPTION];

                const properties = PropertyCodec.decodeOperable(o[Spec.PROPERTIES]);
                for (const property of properties) {
                    a.properties.set(property.iid, property);
                }

                const actions = ActionCodec.decodeOperable(o[Spec.ACTIONS]);
                for (const action of actions) {
                    a.actions.set(action.iid, action);
                }

                const events = EventCodec.decode(o[Spec.EVENTS]);
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
            object[Spec.PROPERTIES] = PropertyCodec.encodeArray(service.properties);
        }

        if (service.actions.size > 0) {
            object[Spec.ACTIONS] = ActionCodec.encodeArray(service.actions);
        }

        if (service.events.size > 0) {
            object[Spec.EVENTS] = EventCodec.encodeArray(service.events);
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
