import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {DeviceDefinitionCodec} from "../../../../src/xiot/codec/definition/DeviceDefinitionCodec";

describe('DeviceDefinitionCodec', async () => {

    let folder = './resources/spec/miot/definition/devices/';
    let dir = await fs.readdir(folder);

    it('reading devices, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });

    for (const file of dir) {
        it('decode: ' + file, async () => {
            let a = await fs.readFile(folder + file);
            const json = JSON.parse(a.toString());
            const def = DeviceDefinitionCodec.decode(json);
            expect(JSON.stringify(json)).to.equal(JSON.stringify(DeviceDefinitionCodec.encode(def)));
        });
    }
});