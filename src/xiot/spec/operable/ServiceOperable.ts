import {Service} from '../instance/Service';
import {PropertyOperation} from '../operation/PropertyOperation';
import {ActionOperation} from '../operation/ActionOperation';
import {PropertyOperable} from './PropertyOperable';
import {OperationStatus} from '../status/OperationStatus';
import {ActionOperable} from './ActionOperable';

export class ServiceOperable extends Service {

  tryRead(o: PropertyOperation) {
     const p = this.properties.get(o.pid.iid);
     if (p != null) {
       if (p instanceof PropertyOperable) {
         p.tryRead(o);
       } else {
         o.status = (<number>OperationStatus.UNDEFINED);
       }
     } else {
       o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
     }
  }

  tryWrite(o: PropertyOperation, save: boolean) {
    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof PropertyOperable) {
        p.tryWrite(o, save);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
    }
  }

  tryInvoke(o: ActionOperation) {
    const a = this.actions.get(o.aid.iid);
    if (a != null) {
      if (a instanceof ActionOperable) {
        a.tryInvoke(o);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
      }
    } else {
      o.status = (<number>OperationStatus.ACTION_NOT_FOUND);
    }
  }

  update(o: PropertyOperation) {
    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof PropertyOperable) {
        p.update(o);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
    }
  }

  onPropertiesChanged(o: PropertyOperation) {
    const p = this.properties.get(o.pid.iid);
    if (p != null) {
      if (p instanceof PropertyOperable) {
        p.onPropertiesChanged(o);
      } else {
        o.status = (<number>OperationStatus.UNDEFINED);
      }
    } else {
      o.status = (<number>OperationStatus.PROPERTY_NOT_FOUND);
    }
  }
}
