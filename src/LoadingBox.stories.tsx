import React from "react";
import { storiesOf } from "@storybook/react";
import { LoadingBox } from "./LoadingBox";

storiesOf(LoadingBox.name, module)
    .addDecorator(storyFn => <div style={{ position: "relative", height: 200 }}>{storyFn()}</div>)
    .add("default (primary colors)", () => (
        <LoadingBox>It's doing something...</LoadingBox>
    ))
    .add("secondary colors", () => (
        <LoadingBox colors="secondary">It's doing something...</LoadingBox>
    ));
