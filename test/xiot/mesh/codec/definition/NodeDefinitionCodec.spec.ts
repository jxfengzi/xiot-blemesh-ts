import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {NodeDefinitionCodec} from '../../../../../src/xiot/mesh/codec/definition/NodeDefinitionCodec';

describe('NodeDefinitionCodec', async () => {

    const folder = './resources/spec/node/';
    const dir = await fs.readdir(folder);

    it('reading Nodes, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            const a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = NodeDefinitionCodec.decodeObject(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(NodeDefinitionCodec.encodeObject(def)));
        });
    }
});
