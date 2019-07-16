import React from "react";
import { storiesOf } from "@storybook/react";
import { Number } from "./Number";

storiesOf("data/" + Number.name, module)
    .add("default", () => (
        <Number locale="en-US" value={1234567890} />
    ));
