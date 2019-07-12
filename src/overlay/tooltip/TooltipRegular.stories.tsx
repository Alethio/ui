import React from "react";
import { storiesOf } from "@storybook/react";
import { TooltipRegular } from "./TooltipRegular";

storiesOf("overlay/tooltip/" + TooltipRegular.name, module)
    .addDecorator(s => <div style={{ display: "flex" }}>{s()}</div>)
    .add("default", () => (
        <TooltipRegular content={"Some text"}>
            <div>Hover me</div>
        </TooltipRegular>
    ));
