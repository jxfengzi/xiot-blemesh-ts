import {ValueDef} from './ValueDef';

export class ValueRange implements ValueDef {

    public minHex: string;
    public maxHex: string;
    public description: string;

    getDescription(): string {
        return this.description;
    }
}
