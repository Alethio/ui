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
    .add("ellipsis", () => (
        <div style={{width: 400}}>
            <div style={{maxWidth: 200}}>
                <ValueBox colors="primaryAlt">Short text</ValueBox>
                <ValueBox colors="primaryAlt" Icon={ArrowForwardIcon}>
                    Some very long text that will have to be trimmed</ValueBox>
            </div>
            <ValueBox colors="primaryAlt" fullWidth Icon={ArrowForwardIcon}>Short text (full width)</ValueBox>
            <ValueBox colors="primaryAlt" fullWidth Icon={ArrowForwardIcon}>
                Some very long text that will have to be trimmed</ValueBox>
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
        <ValueBox variant="small" colors="primaryAlt">small</ValueBox>
    ]);
