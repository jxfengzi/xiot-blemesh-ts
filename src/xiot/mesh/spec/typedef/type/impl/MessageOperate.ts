export enum MessageOperate {
    UNDEFINED,
    GET,
    SET,
    SET_NOACK,
    STATUS
}

const _MessageOperateMapping: [MessageOperate, string][] = [
    [MessageOperate.GET, 'Get'],
    [MessageOperate.SET, 'Set'],
    [MessageOperate.SET_NOACK, 'Setnoack'],
    [MessageOperate.STATUS, 'Status'],
];

export function MessageOperateToString(type: MessageOperate): string {
    for (const t of _MessageOperateMapping) {
        if (t[0] === type) {
            return t[1];
        }
    }

    return 'none';
}

export function MessageOperateFromString(type: string): MessageOperate {
    for (const t of _MessageOperateMapping) {
        if (t[1] === type) {
            return t[0];
        }
    }

    return MessageOperate.UNDEFINED;
}