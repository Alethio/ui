import React from "react";
import { storiesOf } from "@storybook/react";
import { ValueBox } from "./ValueBox";
import { ArrowForwardIcon } from "../../../icon/ArrowForwardIcon";

storiesOf("layout/content/box/" + ValueBox.displayName, module)
    .addDecorator(storyFn => <div style={{ display: "flex" }}>{storyFn()}</div>)
    .add("default", () => (
        <ValueBox>Content</ValueBox>
    ))
    .add("icon left", () => (
        <ValueBox Icon={ArrowForwardIcon} iconPlacement="left">Content</ValueBox>
    ))
    .add("icon right", () => (
        <ValueBox Icon={ArrowForwardIcon}>Content</ValueBox>
    ))
    .add("full width", () => (
        <div style={{width: 300}}>
            <ValueBox fullWidth colors="primaryInvert">Content</ValueBox>
        </div>
    ))
    .add("colors", () => [
        <ValueBox colors="primary">Content</ValueBox>,
        <ValueBox colors="primaryAlt">Content</ValueBox>,
        <ValueBox colors="primaryInvert">Content</ValueBox>,
        <ValueBox colors="secondary">Content</ValueBox>,
        <ValueBox colors="secondaryInvert">Content</ValueBox>,
        <ValueBox colors="highlight">Content</ValueBox>,
        <ValueBox colors="warn">Content</ValueBox>,
        <ValueBox colors="error">Content</ValueBox>
    ])
    .add("variants", () => [
        <ValueBox variant="normal" colors="primaryAlt">Content</ValueBox>,
        <ValueBox variant="normalThin" colors="primaryAlt">Content</ValueBox>,
        <ValueBox variant="big" colors="primaryAlt">Content</ValueBox>,
        <ValueBox variant="small" colors="primaryAlt">Content</ValueBox>,
        <ValueBox variant="smallThin" colors="primaryAlt">Content</ValueBox>
    ]);
