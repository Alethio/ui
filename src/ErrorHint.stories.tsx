import React from "react";
import { storiesOf } from "@storybook/react";
import { ErrorHint } from "./ErrorHint";

storiesOf(ErrorHint.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex", justifyContent: "center" }}>{storyFn()}</div>)
    .add("default", () => (
        <ErrorHint>This is an error message</ErrorHint>
    ))
    .add("large", () => (
        <ErrorHint size={48}>This is an error message</ErrorHint>
    ));
