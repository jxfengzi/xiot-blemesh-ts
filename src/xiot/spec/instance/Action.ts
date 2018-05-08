import {ActionType} from '../definitions/urn/ActionType';

export class Action {
  public iid: number;
  public type: ActionType;
  public description: string;
  public in: Array<Number>;
  public out: Array<Number>;

  constructor() {
    this.iid = 0;
    this.in = [];
    this.out = [];
  }
}
