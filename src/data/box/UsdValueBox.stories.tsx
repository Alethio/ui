import React from "react";
import { storiesOf } from "@storybook/react";
import { UsdValueBox } from "./UsdValueBox";

storiesOf("data/box/" + UsdValueBox.name, module)
    .add("default", () => (
        <UsdValueBox value={1234.5678} locale="en-US" />
    ));
