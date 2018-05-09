import {Urn} from '../Urn';
import {UrnType} from '../UrnType';
import {MessageOperate, MessageOperateFromString} from './MessageOperate';

export class MessageType extends Urn {

    static valueOf(string: string): MessageType {
        const type = new MessageType();
        type.parse(UrnType.MESSAGE, string);
        return type;
    }

    public operate(): MessageOperate {
        return MessageOperateFromString(this.additional);
    }

}