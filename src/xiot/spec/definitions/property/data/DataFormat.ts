export enum DataFormat {
  UNKNOWN = 0,
  BOOL = 1,
  UINT8 = 2,
  UINT16 = 3,
  UINT32 = 4,
  INT8 = 5,
  INT16 = 6,
  INT32 = 7,
  INT64 = 8,
  FLOAT = 9,
  STRING = 10,
}

const _DataFormatMapping: [DataFormat, string][] = [
  [DataFormat.BOOL, 'bool'],
  [DataFormat.UINT8, 'uint8'],
  [DataFormat.UINT16, 'uint16'],
  [DataFormat.UINT32, 'uint32'],
  [DataFormat.INT8, 'int8'],
  [DataFormat.INT16, 'int16'],
  [DataFormat.INT32, 'int32'],
  [DataFormat.INT64, 'int64'],
  [DataFormat.FLOAT, 'float'],
  [DataFormat.STRING, 'string'],
];

export function DataFormatToString(format: DataFormat): string {
  for (const t of _DataFormatMapping) {
    if (t[0] === format) {
      return t[1];
    }
  }

  return 'undefined';
}

export function DataFormatFromString(format: string): DataFormat {
  for (const t of _DataFormatMapping) {
    if (t[1] === format) {
      return t[0];
    }
  }

  return DataFormat.UNKNOWN;
}
