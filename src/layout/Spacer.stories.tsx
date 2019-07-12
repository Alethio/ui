import React from "react";
import { storiesOf } from "@storybook/react";
import { Spacer } from "./Spacer";
import { ValueBox } from "./content/box/ValueBox";

storiesOf("layout/" + Spacer.displayName, module)
    .add("default", () => <div>
        <ValueBox>Content 1</ValueBox>
        <Spacer height="48px" />
        <ValueBox>Content 2</ValueBox>
    </div>);
