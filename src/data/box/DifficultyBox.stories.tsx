import React from "react";
import { storiesOf } from "@storybook/react";
import { DifficultyBox } from "./DifficultyBox";
// tslint:disable-next-line:import-blacklist
import { BigNumber } from "bignumber.js";

storiesOf("data/box/" + DifficultyBox.name, module)
    .add("default", () => (
        <DifficultyBox locale="en-US" value={new BigNumber(100000000000000000)} />
    ));
