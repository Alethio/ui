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
        <ValueBox colors="primary">primary</ValueBox>,
        <ValueBox colors="primaryAlt">primaryAlt</ValueBox>,
        <ValueBox colors="primaryInvert">primaryInvert</ValueBox>,
        <ValueBox colors="secondary">secondary</ValueBox>,
        <ValueBox colors="secondaryInvert">secondaryInvert</ValueBox>,
        <ValueBox colors="highlight">highlight</ValueBox>,
        <ValueBox colors="warn">warn</ValueBox>,
        <ValueBox colors="error">error</ValueBox>
    ])
    .add("variants", () => [
        <ValueBox variant="normal" colors="primaryAlt">normal</ValueBox>,
        <ValueBox variant="normalThin" colors="primaryAlt">normalThin</ValueBox>,
        <ValueBox variant="big" colors="primaryAlt">big</ValueBox>,
        <ValueBox variant="small" colors="primaryAlt">small</ValueBox>,
        <ValueBox variant="smallThin" colors="primaryAlt">smallThin</ValueBox>
    ]);
