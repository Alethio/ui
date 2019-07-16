import React from "react";
import { storiesOf } from "@storybook/react";
import { GweiValueBox } from "./GweiValueBox";
// tslint:disable-next-line:import-blacklist
import BigNumber from "bignumber.js";

storiesOf("data/box/" + GweiValueBox.name, module)
    .add("default", () => (
        <GweiValueBox locale="en-US" wei={new BigNumber(12345678900000000000000)}></GweiValueBox>
    ));
