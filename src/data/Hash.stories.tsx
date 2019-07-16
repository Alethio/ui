import React from "react";
import { storiesOf } from "@storybook/react";
import { Hash } from "./Hash";

storiesOf("data/" + Hash.name, module)
    .addDecorator(storyFn => <div style={{ display: "flex", padding: 16}}>{storyFn()}</div>)
    .add("default", () => (
        <Hash>0xffddeeccbbaabbccddeeff</Hash>
    ))
    .add("short hash", () => (
        <Hash>0xffddeeccbbaa</Hash>
    ));
