import React from "react";
import { storiesOf } from "@storybook/react";
import { EthValue } from "./EthValue";
// tslint:disable-next-line:import-blacklist
import BigNumber from "bignumber.js";

storiesOf("data/" + EthValue.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <EthValue locale="en-US" wei={new BigNumber(1000456789000000000000)} />
    ))
    .add("decimals", () => (
        <EthValue locale="en-US" wei={new BigNumber(1000456789000000000000)} decimals={2} />
    ))
    .add("with symbol", () => (
        <EthValue locale="en-US" wei={new BigNumber(1000456789000000000000)} showSymbol />
    ));
