import { storiesOf } from "@storybook/react";
import { EthRenderer } from "./EthRenderer";
// tslint:disable-next-line:import-blacklist
import BigNumber from "bignumber.js";

storiesOf("data/gridRenderer/" + EthRenderer.name, module)
    .add("default", () => (
        new EthRenderer<{data: BigNumber}>("en-US", f => f.data).render({ data: new BigNumber(1234567890000000000000) })
    ))
    .add("decimals", () => (
        new EthRenderer<{data: BigNumber}>("en-US", f => f.data, {
            decimals: 2
        }).render({ data: new BigNumber(1234567890000000000000) })
    ));
