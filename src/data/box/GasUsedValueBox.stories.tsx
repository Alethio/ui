import React from "react";
import { storiesOf } from "@storybook/react";
import { GasUsedValueBox } from "./GasUsedValueBox";
// tslint:disable-next-line:import-blacklist
import BigNumber from "bignumber.js";

storiesOf("data/box/" + GasUsedValueBox.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <GasUsedValueBox limit={new BigNumber(100000)} value={new BigNumber(40000)} locale="en-US"></GasUsedValueBox>
    ))
    .add("no limit", () => (
        <GasUsedValueBox limit={new BigNumber(0)} value={new BigNumber(40000)} locale="en-US"></GasUsedValueBox>
    ));
