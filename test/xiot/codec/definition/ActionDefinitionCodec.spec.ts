import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {ActionDefinitionCodec} from "../../../../src/xiot/codec/definition/ActionDefinitionCodec";

describe('ActionDefinitionCodec', async () => {

    let folder = './resources/spec/miot/definition/actions/';
    let dir = await fs.readdir(folder);

    it('reading actions, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            let a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = ActionDefinitionCodec.decode(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(ActionDefinitionCodec.encode(def)));
        });
    }
});
