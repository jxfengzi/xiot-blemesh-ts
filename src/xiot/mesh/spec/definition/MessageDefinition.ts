import {FieldType} from '../typedef/type/impl/FieldType';
import {MessageType} from '../typedef/type/impl/MessageType';


export class MessageDefinition {
    public type: MessageType;
    public opcode: Array<Number>;
    public requiredFields: Array<FieldType>;
    public optionalFields: Array<FieldType>;
    public response: MessageType;
}
