import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {ModelDefinitionCodec} from '../../../../../src/xiot/mesh/codec/definition/ModelDefinitionCodec';

describe('ModelDefinitionCodec', async () => {

    const folder = './resources/spec/model/';
    const dir = await fs.readdir(folder);

    it('reading Models, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = ModelDefinitionCodec.decodeObject(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(ModelDefinitionCodec.encodeObject(def)));
        });
    }
});
