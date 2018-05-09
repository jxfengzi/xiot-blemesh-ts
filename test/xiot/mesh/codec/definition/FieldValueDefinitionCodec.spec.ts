import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {FieldValueDefinitionCodec} from '../../../../../src/xiot/mesh/codec/definition/FieldValueDefinitionCodec';

describe('FieldValueDefinitionCodec', async () => {

    const folder = './resources/spec/field-value/';
    const dir = await fs.readdir(folder);

    it('reading FieldValues, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = FieldValueDefinitionCodec.decodeObject(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(FieldValueDefinitionCodec.encodeObject(def)));
        });
    }
});
