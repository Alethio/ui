import * as assert from "assert";
import { DifficultyFormatter } from "./DifficultyFormatter";
import { BigNumberFormatter } from "./BigNumberFormatter";
// tslint:disable-next-line:import-blacklist
import { BigNumber } from "bignumber.js";

describe("util/difficulty/format", () => {
    it("should format difficulty based on powers of 1000", () => {
        let locale = "en-US";
        let formatter = new DifficultyFormatter(new BigNumberFormatter());
        let testData = new Map<string, string>([
            ["0.00001", "0 H"],
            ["0.200001", "0.2 H"],
            ["1.111222", "1.111 H"],
            ["999", "999 H"],
            ["1000", "1 KH"],
            ["1001", "1.001 KH"],
            ["999999", "999.999 KH"],
            ["1000000", "1 MH"],
            ["9999000", "9.999 MH"],
            ["9999999", "10 MH"],
            ["1000000000", "1 GH"],
            ["9999990000", "10 GH"],
            ["1000000000000", "1 TH"],
            ["9999900000000", "10 TH"],
            ["1000000000000000", "1 PH"],
            ["1234000000000000000", "1,234 PH"],
            ["1234560000000000000", "1,234.56 PH"]

        ]);
        testData.forEach((v, k) => {
            assert.equal(formatter.format(new BigNumber(k), locale), v);
        });
    });
});
