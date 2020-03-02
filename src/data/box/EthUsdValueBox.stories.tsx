import React from "react";
import { storiesOf } from "@storybook/react";
import { EthUsdValueBox } from "./EthUsdValueBox";
// tslint:disable-next-line:import-blacklist
import BigNumber from "bignumber.js";

storiesOf("data/box/" + EthUsdValueBox.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} latestEthPrice={123}/>
    ))
    .add("zero value", () => (
        <EthUsdValueBox locale="en-US" wei={new BigNumber(0)} latestEthPrice={123}/>
    ))
    .add("decimals", () => (
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} decimals={2} latestEthPrice={123}/>
    ))
    .add("with custom symbol", () => (
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} symbol="GöETH" latestEthPrice={123}/>
    ))
    .add("colors", () => [
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="primary"
            latestEthPrice={123}/>,
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="primaryAlt"
            latestEthPrice={123}/>,
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="primaryInvert"
            latestEthPrice={123}/>,
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="secondary"
            latestEthPrice={123}/>,
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="secondaryInvert"
            latestEthPrice={123}/>,
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="highlight"
            latestEthPrice={123}/>,
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="warn" latestEthPrice={123}/>,
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} colors="error" latestEthPrice={123}/>
    ])
    .add("variants", () => [
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} variant="normal" colors="primaryAlt"
            latestEthPrice={123}/>,
        <EthUsdValueBox locale="en-US" wei={new BigNumber(1000456789000000000000)} variant="small" colors="primaryAlt"
            latestEthPrice={123}/>
    ]);
