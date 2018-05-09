
export enum Unit {
    NONE,
    PERCENTAGE,
    CELSIUS,
    LUX,
    UNITLESS,
    SECONDS,
    ARC_DEGREES,
    PASCAL,
    KELVIN,
    WATT,
    METER_PRE_SECOND,
    KM_PER_HOUR,
    STEP_PER_SECOND,
    METER,
    CAL,
    MINUTES,
    HOURS,
    DAYS,
}

const _UnitMapping: [Unit, string][] = [
    [Unit.PERCENTAGE, 'percentage'],
    [Unit.CELSIUS, 'celsius'],
    [Unit.LUX, 'lux'],
    [Unit.UNITLESS, 'unitless'],
    [Unit.SECONDS, 'seconds'],
    [Unit.ARC_DEGREES, 'arcdegrees'],
    [Unit.PASCAL, 'pascal'],
    [Unit.KELVIN, 'kelvin'],
    [Unit.WATT, 'watt'],
    [Unit.METER_PRE_SECOND, 'meter_per_second'],
    [Unit.KM_PER_HOUR, 'km_per_hour'],
    [Unit.STEP_PER_SECOND, 'step_per_second'],
    [Unit.METER, 'meter'],
    [Unit.CAL, 'cal'],
    [Unit.MINUTES, 'minutes'],
    [Unit.HOURS, 'hours'],
    [Unit.DAYS, 'days'],
];

export function UnitToString(type: Unit): string {
    for (const t of _UnitMapping) {
        if (t[0] === type) {
            return t[1];
        }
    }

    return 'none';
}

export function UnitFromString(type: string): Unit {
    if (type != null) {
        const v = type.toLowerCase();
        for (const t of _UnitMapping) {
            if (t[1] === v) {
                return t[0];
            }
        }
    }

    return Unit.NONE;
}
