import React from "react";
import { storiesOf } from "@storybook/react";
import { Currency } from "./Currency";

storiesOf("data/" + Currency.name, module)
    .add("default", () => (
        <Currency locale="en-US" value={20} symbol="ETH" />
    ));
