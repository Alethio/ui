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
const InvertedColorArea = styled.div`
    display: flex;
    padding: 8px;
    & > * {
        padding: 8px;
    }
    background: ${props => props.theme.colors.button.primary.normal.background};
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
    .add("special", () => (
        [
            <Button colors="special">Click Me</Button>,
            <Button colors="special" Icon={ArrowForwardIcon}>Click me</Button>,
            <Button colors="special" Icon={ArrowForwardIcon} disabled>Can't click me</Button>
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
        <Button elevationType="floating" colors="primary">Click me</Button>
    ))
    .add("embossed", () => (
        <Button elevationType="embossed" colors="primary">Click me</Button>
    ))
    .add("rounded", () => (
        [
            <Button elevationType="floating" rounded colors="primary" Icon={ArrowForwardIcon}>Click me</Button>,
            <Button elevationType="floating" rounded colors="primary" Icon={ArrowForwardIcon}></Button>
        ]
    ))
    .add("with spinner", () => (
        <Button Icon={SpinnerLite} disabled>Loading...</Button>
    ))
    .add("inverted colors", () => (
        <InvertedColorArea>
            <Button inverted>Secondary</Button>
            <Button inverted Icon={ArrowForwardIcon}>Secondary Icon</Button>
            <Button inverted disabled>Secondary disabled</Button>
            <Button inverted colors="primary">Primary</Button>
            <Button inverted colors="primary" Icon={ArrowForwardIcon}>Primary Icon</Button>
            <Button inverted disabled colors="primary">Primary disabled</Button>
        </InvertedColorArea>
    ));
