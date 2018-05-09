import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {ElementDefinitionCodec} from '../../../../../src/xiot/mesh/codec/definition/ElementDefinitionCodec';

describe('ElementDefinitionCodec', async () => {

    const folder = './resources/spec/element/';
    const dir = await fs.readdir(folder);

    console.log('ElementDefinitionCodec Testing...');

    it('reading elements, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        console.log('ElementDefinitionCodec for decode: ', file);

        it('decode: ' + file, async () => {
            console.log('decode: ', folder + file);

            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = ElementDefinitionCodec.decodeObject(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(ElementDefinitionCodec.encodeObject(def)));
        });
    }

    console.log('ElementDefinitionCodec Test Finished!');
});
