import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {StateDefinitionCodec} from '../../../../../src/xiot/mesh/codec/definition/StateDefinitionCodec';

describe('StateDefinitionCodec', async () => {

    const folder = './resources/spec/state/';
    const dir = await fs.readdir(folder);

    it('reading States, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = StateDefinitionCodec.decodeObject(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(StateDefinitionCodec.encodeObject(def)));
        });
    }
});
