import {Action} from '../instance/Action';
import {ActionOperation} from '../operation/ActionOperation';
import {OperationStatus} from '../status/OperationStatus';

export class ActionOperable extends Action {

  tryInvoke(o: ActionOperation) {
    o.status = (<number>OperationStatus.OK);

    if (this.in.length !== o.in.length) {
      o.status = (<number>OperationStatus.ACTION_IN_ERROR);
      return;
    }

    // TODO: ...
  }
}
