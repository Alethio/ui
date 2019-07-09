import React from "react";
import { storiesOf } from "@storybook/react";
import { CopyValueButton } from "./CopyValueButton";

storiesOf("control/button/" + CopyValueButton.name, module)
    .addDecorator(storyFn => <div style={{ position: "relative", height: 200 }}>{storyFn()}</div>)
    .add("default", () => (
        <CopyValueButton value="text to copy to clipboard" />
    ));
