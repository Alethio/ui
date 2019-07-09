import React from "react";
import { storiesOf } from "@storybook/react";
import { MessageBox } from "./MessageBox";
import { InfoIcon } from "./icon/InfoIcon";

storiesOf(MessageBox.name, module)
    .addDecorator(storyFn => <div style={{ position: "relative", height: 200 }}>{storyFn()}</div>)
    .add("default (primary colors)", () => (
        <MessageBox Icon={InfoIcon}>Some useful info</MessageBox>
    ))
    .add("secondary colors", () => (
        <MessageBox Icon={InfoIcon} colors="secondary">Some useful info</MessageBox>
    ));
