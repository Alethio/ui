import React from "react";
import { storiesOf } from "@storybook/react";
import { TooltipBase } from "./TooltipBase";

storiesOf("overlay/tooltip/" + TooltipBase.name, module)
    .addDecorator(s => <div style={{ display: "flex" }}>{s()}</div>)
    .add("default", () => (
        <TooltipBase content={"Some text"}>
            <div>Hover me</div>
        </TooltipBase>
    ))
    .add("custom style", () => (
        <TooltipBase content={"Some text"} style={{border: "1px solid red"}}>
            <div>Hover me</div>
        </TooltipBase>
    ));
