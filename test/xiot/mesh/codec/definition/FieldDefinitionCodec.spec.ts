import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {FieldDefinitionCodec} from '../../../../../src/xiot/mesh/codec/definition/FieldDefinitionCodec';

describe('FieldDefinitionCodec', async () => {

    const folder = './resources/spec/field/';
    const dir = await fs.readdir(folder);

    it('reading Fields, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = FieldDefinitionCodec.decodeObject(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(FieldDefinitionCodec.encodeObject(def)));
        });
    }
});
