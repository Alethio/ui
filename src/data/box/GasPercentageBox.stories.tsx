import React from "react";
import { storiesOf } from "@storybook/react";
import { GasPercentageBox } from "./GasPercentageBox";

storiesOf("data/box/" + GasPercentageBox.name, module)
    .add("default", () => (
        <GasPercentageBox>100%</GasPercentageBox>
    ));
