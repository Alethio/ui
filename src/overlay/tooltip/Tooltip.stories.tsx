import React from "react";
import { storiesOf } from "@storybook/react";
import { Tooltip } from "./Tooltip";

storiesOf("overlay/tooltip/" + Tooltip.name, module)
    .addDecorator(s => <div style={{ display: "flex" }}>{s()}</div>)
    .add("default", () => (
        <Tooltip content={"Some text"}>
            <div>Hover me</div>
        </Tooltip>
    ));
