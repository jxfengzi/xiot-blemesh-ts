export enum UrnType {
  UNDEFINED,
  PROPERTY,
  ACTION,
  EVENT,
  SERVICE,
  DEVICE
}

const _UrnTypeMapping: [UrnType, string][] = [
  [UrnType.PROPERTY, 'property'],
  [UrnType.ACTION, 'action'],
  [UrnType.EVENT, 'event'],
  [UrnType.SERVICE, 'service'],
  [UrnType.DEVICE, 'device'],
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
