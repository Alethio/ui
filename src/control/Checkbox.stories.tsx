import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "./Checkbox";

storiesOf("control/checkbox/" + Checkbox.name, module)
    .add("default", () => (
        <Checkbox id="myCheckbox" name="myCheckbox" value="someValue" />
    ))
    .add("checked", () => (
        <Checkbox id="myCheckbox" name="myCheckbox" value="someValue" checked />
    ));
