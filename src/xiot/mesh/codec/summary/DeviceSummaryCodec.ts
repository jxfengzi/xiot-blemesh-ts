import {DeviceType} from '../../spec/definitions/urn/DeviceType';
import {DeviceSummary} from '../../spec/summary/DeviceSummary';

export class DeviceSummaryCodec {

  static decode(json: Object): Array<DeviceSummary> {
    const array = [];

    const devices = json['devices'];
    if (devices != null) {
      if (devices instanceof Array) {
        for (const device of devices) {
          const summary = new DeviceSummary();
          summary.did = device['did'];
          summary.category = device['category'];
          summary.name = device['name'];
          summary.type = DeviceType.valueOf(device['type']);
          array.push(summary);
        }
      }
    }

    return array;
  }

  static encode(summary: DeviceSummary): Object {
    return Object.assign({
      did: summary.did,
      type: summary.type.toString(),
      name: summary.name,
      category: summary.category
    });
  }

  static encodeArray(summaries: Array<DeviceSummary>): Object {
    return Object.assign({
      devices: (summaries != null) ? summaries.map(s => DeviceSummaryCodec.encode(s)) : []
    });
  }
}
