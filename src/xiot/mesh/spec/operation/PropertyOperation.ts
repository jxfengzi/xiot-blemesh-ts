import {AbstractOperation} from './AbstractOperation';
import {PID} from '../xid/PID';

export class PropertyOperation extends AbstractOperation {
  public pid: PID;
  public value: Object;
}
