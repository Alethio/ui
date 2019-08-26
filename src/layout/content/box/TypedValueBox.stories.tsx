import React from "react";
import { storiesOf } from "@storybook/react";
import { TypedValueBox } from "./TypedValueBox";

storiesOf("layout/content/box/" + TypedValueBox.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <TypedValueBox value="1234567890" type="integer" />
    ))
    .add("as form item", () => (
        <TypedValueBox value="1234567890" type="integer" withinForm />
    ));
