import React from "react";
import { storiesOf } from "@storybook/react";
import { EthValueBox } from "./EthValueBox";
// tslint:disable-next-line:import-blacklist
import BigNumber from "bignumber.js";

storiesOf("data/box/" + EthValueBox.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} />
    ))
    .add("zero value", () => (
        <EthValueBox locale="en-US" wei={new BigNumber(0)} />
    ))
    .add("decimals", () => (
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} decimals={2} />
    ))
    .add("with custom symbol", () => (
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} symbol="GöETH" />
    ))
    .add("colors", () => [
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="primary" />,
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="primaryAlt" />,
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="primaryInvert" />,
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="secondary" />,
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="secondaryInvert" />,
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="highlight" />,
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="warn" />,
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="error" />
    ])
    .add("variants", () => [
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} variant="normal" colors="primaryAlt"/>,
        <EthValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} variant="small" colors="primaryAlt"/>
    ]);
