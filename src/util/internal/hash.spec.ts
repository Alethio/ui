import * as assert from "assert";
import { splitLongHash } from "./hash";

describe("util/hash/splitLongHash", () => {
    it("should leave short hashes unchanged", () => {
        assert.equal(false, splitLongHash("0x88912f40400e6df54f", 20, 6));
    });

    it("should split long hashes", () => {
        assert.deepEqual(["0xfe88", "c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240", "c58553"],
            splitLongHash("0xfe88c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c58553", 20, 6));
    });
});
