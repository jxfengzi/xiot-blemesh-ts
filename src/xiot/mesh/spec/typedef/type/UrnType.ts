export enum UrnType {
    UNDEFINED,
    FIELD_VALUE,
    FIELD,
    STATE,
    MESSAGE,
    MODEL,
    ELEMENT,
    NODE
}

const _UrnTypeMapping: [UrnType, string][] = [
    [UrnType.FIELD_VALUE, 'field-value'],
    [UrnType.FIELD, 'field'],
    [UrnType.STATE, 'state'],
    [UrnType.MESSAGE, 'message'],
    [UrnType.MODEL, 'model'],
    [UrnType.ELEMENT, 'element'],
    [UrnType.NODE, 'node'],
];

export function UrnTypeToString(type: UrnType): string {
    for (const t of _UrnTypeMapping) {
        if (t[0] === type) {
            return t[1];
        }
    }

    return 'none';
}

export function UrnTypeFromString(type: string): UrnType {
    for (const t of _UrnTypeMapping) {
        if (t[1] === type) {
            return t[0];
        }
    }

    return UrnType.UNDEFINED;
}
