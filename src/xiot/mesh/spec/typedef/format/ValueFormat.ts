
export enum ValueFormat {
    UNKNOWN,
    UINT8,
    INT8,
    UINT16,
    INT16,
    INT32
}

const _ValueFormatMapping: [ValueFormat, string][] = [
    [ValueFormat.UINT8, 'uint8'],
    [ValueFormat.UINT16, 'uint16'],
    [ValueFormat.INT8, 'int8'],
    [ValueFormat.INT16, 'int16'],
    [ValueFormat.INT32, 'int32'],
];

export function ValueFormatToString(format: ValueFormat): string {
    for (const t of _ValueFormatMapping) {
        if (t[0] === format) {
            return t[1];
        }
    }

    return 'undefined';
}

export function ValueFormatFromString(format: string): ValueFormat {
    for (const t of _ValueFormatMapping) {
        if (t[1] === format) {
            return t[0];
        }
    }

    return ValueFormat.UNKNOWN;
}
