import React from "react";
import { storiesOf } from "@storybook/react";
import { Radio } from "./Radio";

storiesOf("control/" + Radio.name, module)
    .add("default", () => (
        <Radio id="myRadio" name="myRadio" value="someValue"></Radio>
    ))
    .add("checked", () => (
        <Radio id="myRadio" name="myRadio" value="someValue" checked></Radio>
    ));
