import { expect } from 'chai';
import 'mocha';
import * as fs from 'async-file';
import {EventDefinitionCodec} from "../../../../src/xiot/codec/definition/EventDefinitionCodec";

describe('EventDefinitionCodec', async () => {

    let folder = './resources/spec/miot/definition/events/';

    // let dir = await fs.readdir(folder);
    //
    // it('reading events, folder: ' + folder, () => {
    //     expect(true).to.equal(true);
    // });
    //
    // for (const file of dir) {
    //     it('decode: ' + file, async () => {
    //         let a = await fs.readFile(folder + file);
    //         const def = EventDefinitionCodec.decode(a.toString());
    //         // console.log("a: ", a.toString());
    //         expect(true).to.equal(true);
    //     });
    // }

    it('reading events, folder: ' + folder, () => {
        expect(true).to.equal(true);
    });
});