import React from "react";
import { storiesOf } from "@storybook/react";
import { CopyValueTooltip } from "./CopyValueTooltip";
import { ValueBox } from "../layout/content/box/ValueBox";

storiesOf("data/" + CopyValueTooltip.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex"}}>{storyFn()}</div>)
    .add("default", () => (
        <CopyValueTooltip value="12345abcd"><ValueBox>Hover me</ValueBox></CopyValueTooltip>
    ));
