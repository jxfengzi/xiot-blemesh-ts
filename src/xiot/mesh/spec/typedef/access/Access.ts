
export class Access {
    public readable: boolean;
    public writable: boolean;
    public notifiable: boolean;

    constructor() {
        this.readable = false;
        this.writable = false;
        this.notifiable = false;
    }

    static create(access: Array<String>): Access {
        const thiz = new Access();

        for (const v of access) {
            switch (v) {
                case 'read':
                    thiz.readable = true;
                    break;

                case 'write':
                    thiz.writable = true;
                    break;

                case 'notify':
                    thiz.notifiable = true;
                    break;
            }
        }

        return thiz;
    }

    toList(): Array<string> {
        const array = [];

        if (this.readable) {
            array.push('read');
        }

        if (this.writable) {
            array.push('write');
        }

        if (this.notifiable) {
            array.push('notify');
        }

        return array;
    }
}