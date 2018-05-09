import {DataValue} from './data/DataValue';
import {DataFormat} from './data/DataFormat';
import {DataValueFactory} from './data/DataValueFactory';

export class ValueDefinition {

  public value: DataValue;
  public description: string;

  constructor(format: DataFormat, value: Object, description: string) {
    this.description = description;
    this.value = DataValueFactory.create(format, value);
  }
}
