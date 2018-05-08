import {AbstractOperation} from './AbstractOperation';
import {AID} from '../xid/AID';

export class ActionOperation extends AbstractOperation {
  public aid: AID;
  public in: Array<Object>;
  public out: Array<Object>;
}
