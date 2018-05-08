import {Device} from '../instance/Device';
import {DeviceSummary} from '../summary/DeviceSummary';
import {PropertyOperation} from '../operation/PropertyOperation';
import {ActionOperation} from '../operation/ActionOperation';
import {OperationStatus} from '../status/OperationStatus';
import {ServiceOperable} from './ServiceOperable';

export class DeviceOperable extends Device {

  public summary: DeviceSummary;

  tryRead(list: Array<PropertyOperation>) {
    for (const o of list) {
      if (this.summary.did === o.pid.did) {
        const s = this.services.get(o.pid.siid);
        if (s != null) {
          if (s instanceof ServiceOperable) {
            s.tryRead(o);
          } else {
            o.status = (<number>OperationStatus.UNDEFINED);
          }
        } else {
          o.status = (<number>OperationStatus.SERVICE_NOT_FOUND);
        }
      } else {
        o.status = (<number>OperationStatus.DEVICE_ID_NOT_EXIST);
      }
    }
  }

  tryWrite(list: Array<PropertyOperation>, save: boolean) {
    for (const o of list) {
      if (this.summary.did === o.pid.did) {
        const s = this.services.get(o.pid.siid);
        if (s != null) {
          if (s instanceof ServiceOperable) {
            s.tryWrite(o, save);
          } else {
            o.status = (<number>OperationStatus.UNDEFINED);
          }
        } else {
          o.status = (<number>OperationStatus.SERVICE_NOT_FOUND);
        }
      } else {
        o.status = (<number>OperationStatus.DEVICE_ID_NOT_EXIST);
      }
    }
  }

  tryInvoke(o: ActionOperation) {
    if (this.summary.did === o.aid.did) {
      const s = this.services.get(o.aid.siid);
      if (s != null) {
        if (s instanceof ServiceOperable) {
          s.tryInvoke(o);
        } else {
          o.status = (<number>OperationStatus.UNDEFINED);
        }
      } else {
        o.status = (<number>OperationStatus.SERVICE_NOT_FOUND);
      }
    } else {
      o.status = (<number>OperationStatus.DEVICE_ID_NOT_EXIST);
    }
  }

  // onGetProperties(list: Array<PropertyOperation>) {
  //
  // }
  //
  // onPropertiesChanged(list: Array<PropertyOperation>) {
  //
  // }
}
