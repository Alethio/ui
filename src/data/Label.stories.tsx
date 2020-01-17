import React from "react";
import { storiesOf } from "@storybook/react";
import { Label } from "./Label";
import { LayoutRow } from "../layout/content/LayoutRow";

storiesOf("data/" + Label.displayName, module)
    .addParameters({
        info: {
            propTablesExclude: [LayoutRow]
        }
    })
    .addDecorator(storyFn => <LayoutRow>{storyFn()}</LayoutRow>)
    .add("default", () => (
        <Label>Label text</Label>
    ))
    .add("arrow", () => (
        <Label arrow>Label text</Label>
    ))
    .add("disabled", () => (
        <Label disabled>Label text</Label>
    ))
    .add("no uppercase", () => (
        <Label uppercase={false}>Label text</Label>
    ))
    .add("stronger", () => (
        <Label strong>Label text</Label>
    ));
