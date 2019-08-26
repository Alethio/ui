import React from "react";
import { storiesOf } from "@storybook/react";
import { CurrencyBox } from "./CurrencyBox";

storiesOf("data/box/" + CurrencyBox.name, module)
    .add("default", () => (
        <CurrencyBox locale="en-US" value={20} symbol="ETH" />
    ));
