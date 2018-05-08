import {PropertyOperation} from '../../spec/operation/PropertyOperation';
import {PID} from '../../spec/xid/PID';
import {Spec} from '../../spec/constant/Spec';

export class PropertyOperationCodec {

    static decodePIDs(pids: string): Array<PropertyOperation> {
        const array = [];

        if (pids != null) {
            pids.split(',').forEach(pid => {
                const o = new PropertyOperation();
                o.pid = PID.parseString(pid);
                array.push(o);
            });
        }

        return array;
    }

    static decodePIDArray(pids: Array<string>): Array<PropertyOperation> {
        const array = [];

        if (pids != null) {
            pids.forEach(pid => {
                const o = new PropertyOperation();
                o.pid = PID.parseString(pid);
                array.push(o);
            });
        }

        return array;
    }

    static decodeValues(json: Object): Array<PropertyOperation> {
      const array = [];

      const properties = json['properties'];
      if (properties != null) {
        if (properties instanceof Array) {
          properties.forEach(value => {
            const o = new PropertyOperation();
            o.pid = PID.parseString(value[Spec.PID]);
            o.status = value[Spec.STATUS];
            if (o.status == null) {
              o.status = 0;
            }

            if (o.status === 0) {
              o.value = value[Spec.VALUE];
            } else {
              o.description = value[Spec.DESCRIPTION];
            }

            array.push(o);
          });
        }
      }

      return array;
    }

    // static decodeValuesByArray(values: Array<Object>): Array<PropertyOperation> {
    //     const array = [];
    //
    //     if (values != null) {
    //         values.forEach(value => {
    //             const o = new PropertyOperation();
    //             o.pid = PID.parseString(o[Spec.PID]);
    //             o.status = o[Spec.STATUS];
    //             if (o.status === 0) {
    //                 o.value = o[Spec.VALUE];
    //             } else {
    //                 o.description = o[Spec.DESCRIPTION];
    //             }
    //
    //             array.push(o);
    //         });
    //     }
    //
    //     return array;
    // }

    static decodeStatus(json: Object): Array<PropertyOperation> {
        const array = [];

        const properties = json['properties'];

        if (properties != null) {
          properties.forEach(value => {
                const o = new PropertyOperation();
                o.pid = PID.parseString(value[Spec.PID]);
                o.status = value[Spec.STATUS];
                if (o.status !== 0) {
                    o.description = value[Spec.DESCRIPTION];
                }

                array.push(o);
            });
        }

        return array;
    }

    // static decodeStatusByArray(values: Array<Object>): Array<PropertyOperation> {
    //     const array = [];
    //
    //     if (values != null) {
    //         values.forEach(value => {
    //           const o = new PropertyOperation();
    //             o.pid = PID.parseString(o[Spec.PID]);
    //             o.status = o[Spec.STATUS];
    //             if (o.status !== 0) {
    //                 o.description = o[Spec.DESCRIPTION];
    //             }
    //
    //             array.push(o);
    //         });
    //     }
    //
    //     return array;
    // }

    static encodeQueryGETtoString(list: Array<PropertyOperation>): string {
        return list.map(p => p.pid.toString()).join(',');
    }

    static encodeQueryGETtoArray(list: Array<PropertyOperation>): Array<Object> {
        return list.map(p => p.pid.toString());
    }

    static encodeResultGET(list: Array<PropertyOperation>): Array<Object> {
        return list.map(p => {
            const object = Object.assign({
                pid: p.pid.toString(),
                status: p.status
            });

            if (p.status === 0) {
                object[Spec.VALUE] = p.value;
            } else {
                object[Spec.DESCRIPTION] = p.description;
            }

            return object;
        });
    }

    static encodeQuerySET(list: Array<PropertyOperation>): Object {
        return Object.assign({properties:
            list.filter(p => p.status === 0)
                .map(p => Object.assign({pid: p.pid.toString(), value: p.value}))});
    }

    static encodeResultSET(list: Array<PropertyOperation>): Array<Object> {
        return list.map(p => {
            const object = Object.assign({
                pid: p.pid.toString(),
                status: p.status
            });

            if (p.status !== 0) {
                object[Spec.DESCRIPTION] = p.description;
            }

            return object;
        });
    }
}
