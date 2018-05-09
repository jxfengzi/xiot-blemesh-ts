import {UrnType, UrnTypeFromString, UrnTypeToString} from './UrnType';

export class Urn {

    public valid: boolean;
    public string: string;

    public ns: string;
    public type: UrnType;
    public name: string;
    public hasAdditional: boolean;
    public additional: string;

    constructor() {
        this.valid = false;
        this.string = '';
    }

    parseString(string: string): boolean {
        let ret: boolean;
        this.valid = false;
        this.string = string;

        do {
            const a = string.split(':');
            if (a.length !== 4 && a.length !== 5) {
                break;
            }

            if (a[0] !== 'urn') {
                break;
            }

            this.ns = a[1];
            this.type = UrnTypeFromString(a[2]);
            this.name = a[3];

            if (a.length === 5) {
                this.hasAdditional = true;
                this.additional = a[4];
            }

            this.valid = true;
            ret = true;
        } while (false);

        return ret;
    }

    parse(theType: UrnType, string: string): boolean {
        return this.parseString(string) && this.validateType(theType);
    }

    validateType(theType: UrnType): boolean {
        return (this.type === theType);
    }

    toString(): string {
        if (! this.valid) {
            return this.string;
        }

        let s = 'urn:' + this.ns + ':' + UrnTypeToString(this.type) + ':' + this.name;
        if (this.hasAdditional) {
            s = s + ':' + this.additional;
        }

        return s;
    }
}
