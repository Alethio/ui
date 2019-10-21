import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./Button";
import { ArrowForwardIcon } from "../icon/ArrowForwardIcon";
import styled from "../styled-components";
import { SpinnerLite } from "../fx/SpinnerLite";

const ButtonContainer = styled.div`
    display: flex;
    padding: 8px;

    & > *:first-child {
        margin-left: 0;
    }
    & > * {
        margin-left: 8px;
    }
`;

storiesOf("control/button/" + Button.name, module)
    .addParameters({
        info: {
            propTablesExclude: [ButtonContainer]
        }
    })
    .addDecorator(storyFn => <ButtonContainer>{storyFn()}</ButtonContainer>)
    .add("default (secondary)", () => (
        [
            <Button onClick={() => alert("Boo!")}>Click me</Button>,
            <Button Icon={ArrowForwardIcon}>Click me</Button>,
            <Button disabled Icon={ArrowForwardIcon}>Disabled</Button>
        ]
    ))
    .add("primary", () => (
        [
            <Button colors="primary">Click me</Button>,
            <Button colors="primary" Icon={ArrowForwardIcon}>Click me</Button>,
            <Button colors="primary" Icon={ArrowForwardIcon} disabled>Can't click me</Button>
        ]
    ))
    .add("special1", () => (
        [
            <Button colors="special1">Click Me</Button>,
            <Button colors="special1" Icon={ArrowForwardIcon}>Click me</Button>,
            <Button colors="special1" Icon={ArrowForwardIcon} disabled>Can't click me</Button>
        ]
    ))
    .add("special2", () => (
        [
            <Button colors="special2">Click Me</Button>,
            <Button colors="special2" Icon={ArrowForwardIcon}>Click me</Button>,
            <Button colors="special2" Icon={ArrowForwardIcon} disabled>Can't click me</Button>
        ]
    ))
    .add("icon", () => (
        <Button Icon={ArrowForwardIcon}></Button>
    ))
    .add("icon and text", () => (
        [
            <Button Icon={ArrowForwardIcon}>Click me</Button>,
            <Button Icon={ArrowForwardIcon} iconPlacement="right">Click me</Button>
        ]
    ))
    .add("floating", () => (
        [
            <Button floating colors="primary">Click me</Button>,
            <Button floating colors="special1">Click me</Button>
        ]
    ))
    .add("rounded", () => (
        [
            <Button floating rounded colors="primary" Icon={ArrowForwardIcon}>Click me</Button>,
            <Button floating rounded colors="primary" Icon={ArrowForwardIcon}></Button>
        ]
    ))
    .add("with spinner", () => (
        <Button Icon={SpinnerLite} disabled>Loading...</Button>
    ));
