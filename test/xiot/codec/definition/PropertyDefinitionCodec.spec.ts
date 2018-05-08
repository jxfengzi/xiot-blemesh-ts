import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {PropertyDefinitionCodec} from "../../../../src/xiot/codec/definition/PropertyDefinitionCodec";

describe('PropertyDefinitionCodec', async () => {

    let folder = './resources/spec/miot/definition/properties/';
    let dir = await fs.readdir(folder);

    it('reading properties, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            let a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = PropertyDefinitionCodec.decode(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(PropertyDefinitionCodec.encode(def)));
        });
    }
});