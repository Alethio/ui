import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "./Checkbox";

storiesOf("control/" + Checkbox.name, module)
    .add("default", () => (
        <Checkbox name="myCheckbox" value="someValue" />
    ))
    .add("checked", () => (
        <Checkbox name="myCheckbox" value="someValue" checked />
    ))
    .add("label", () => (
        <Checkbox name="myCheckbox" value="someValue">Label<br/>second line</Checkbox>
    ))
    .add("disabled", () => [
        <Checkbox name="myCheckbox" value="someValue" disabled>Disabled<br/>second line</Checkbox>,
        <Checkbox name="myCheckbox" value="someValue" checked disabled>Checked<br/>and disabled</Checkbox>
    ]);
