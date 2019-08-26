import React from "react";
import { storiesOf } from "@storybook/react";
import { NumberBox } from "./NumberBox";

storiesOf("data/box/" + NumberBox.name, module)
    .add("default", () => (
        <NumberBox locale="en-US" value={1234567890} />
    ));
