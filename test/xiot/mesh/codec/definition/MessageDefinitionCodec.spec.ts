import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {MessageDefinitionCodec} from '../../../../../src/xiot/mesh/codec/definition/MessageDefinitionCodec';

describe('MessageDefinitionCodec', async () => {

    const folder = './resources/spec/message/';
    const dir = await fs.readdir(folder);

    it('reading Messages, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = MessageDefinitionCodec.decodeObject(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(MessageDefinitionCodec.encodeObject(def)));
        });
    }
});
