import {Event} from '../../spec/instance/Event';
import {BlemeshSpec} from '../../spec/constant/Spec';
import {EventType} from '../../spec/definitions/urn/EventType';

export class EventCodec {

    static decode(array: Array<Object>): Array<Event> {
        const list = [];

        if (array != null) {
            for (const o of array) {
                const a = new Event();
                a.iid = o[BlemeshSpec.IID];
                a.type = EventType.valueOf(o[BlemeshSpec.TYPE]);
                a.description = o[BlemeshSpec.DESCRIPTION];
                a.arguments.push(o[BlemeshSpec.ARGUMENTS]);
                list.push(a);
            }
        }

        return list;
    }

    static encode(event: Event): Object {
        return Object.assign({
            iid: event.iid,
            type: event.type.toString(),
            description: event.description,
            in: event.arguments
        });
    }

    static encodeArray(events: Map<Number, Event>): Array<Object> {
        const array = [];

        events.forEach((event) => {
            array.push(EventCodec.encode(event));
        });

        return array;
    }
}
