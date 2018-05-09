import {ValueFormat} from '../typedef/format/ValueFormat';
import {ValueConstraint} from '../typedef/value/ValueConstraint';
import {ValueList} from '../typedef/value/ValueList';
import {ValueRange} from '../typedef/value/ValueRange';


export class AbstractFieldValue {

    public format = ValueFormat.UNKNOWN;
    public constraint = ValueConstraint.UNKNOWN;
    public list: ValueList;
    public range: ValueRange;
}
