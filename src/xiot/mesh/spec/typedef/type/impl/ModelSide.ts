export enum ModelSide {
    UNDEFINED,
    CLIENT,
    SERVER,
}

const _ModelSideMapping: [ModelSide, string][] = [
    [ModelSide.CLIENT, 'Client'],
    [ModelSide.SERVER, 'Server'],
];

export function ModelSideToString(type: ModelSide): string {
    for (const t of _ModelSideMapping) {
        if (t[0] === type) {
            return t[1];
        }
    }

    return 'none';
}

export function ModelSideFromString(type: string): ModelSide {
    for (const t of _ModelSideMapping) {
        if (t[1] === type) {
            return t[0];
        }
    }

    return ModelSide.UNDEFINED;
}
