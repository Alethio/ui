import React from "react";
import { storiesOf } from "@storybook/react";
import { ErrorBox } from "./ErrorBox";

storiesOf(ErrorBox.name, module)
    .addDecorator(storyFn => <div style={{ position: "relative", height: 200}}>{storyFn()}</div>)
    .add("default (Primary colors)", () => (
        <ErrorBox>This is an error message</ErrorBox>
    ))
    .add("Secondary colors", () => (
        <ErrorBox colors="secondary">This is an error message</ErrorBox>
    ));
