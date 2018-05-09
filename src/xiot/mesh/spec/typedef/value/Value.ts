import {ValueDef} from './ValueDef';

export class Value implements ValueDef {

    public hex: string;
    public description: string;

    getDescription(): string {
        return this.description;
    }
}
