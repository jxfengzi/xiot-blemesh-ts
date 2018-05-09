import {DeviceDetail} from '../../spec/summary/DeviceDetail';

export class DeviceDetailCodec {

  static decode(json: Object): Array<DeviceDetail> {
    const array = [];

    const devices = json['device-information'];
    if (devices != null) {
      if (devices instanceof Array) {
        for (const device of devices) {
          const detail = new DeviceDetail();
          detail.did = device['id'];
          detail.name = device['name'];
          detail.serialNumber = device['serialNumber'];
          detail.online = device['online'];
          detail.roomId = device['rid'];
          array.push(detail);
        }
      }
    }

    return array;
  }

  static encode(detail: DeviceDetail): Object {
    return Object.assign({
      id: detail.did,
      type: detail.type.toString(),
      online: detail.online,
      name: detail.name,
      serialNumber: detail.serialNumber,
      rid: detail.roomId
    });
  }

  static encodeArray(summaries: Array<DeviceDetail>): Object {
    return Object.assign({
      'device-information': (summaries != null) ? summaries.map(s => DeviceDetailCodec.encode(s)) : []
    });
  }
}
