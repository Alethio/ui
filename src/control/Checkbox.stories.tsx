import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "./Checkbox";

storiesOf("control/checkbox/" + Checkbox.name, module)
    .add("default", () => (
        <Checkbox name="myCheckbox" value="someValue" />
    ))
    .add("checked", () => (
        <Checkbox name="myCheckbox" value="someValue" checked />
    ))
    .add("label", () => (
        <Checkbox name="myCheckbox" value="someValue">Label<br/>second line</Checkbox>
    ));
