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
    background: ${props => props.theme.colors.base.accent.color};
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
    .add("elevated", () => (
        [
        <Button elevation="high" colors="primary">high elevation</Button>,
        <Button elevation="low" colors="primary">low elevation</Button>
        ]
    ))
    .add("rounded", () => (
        [
            <Button elevation="high" rounded colors="primary" Icon={ArrowForwardIcon}>Click me</Button>,
            <Button elevation="high" rounded colors="primary" Icon={ArrowForwardIcon}></Button>
        ]
    ))
    .add("with spinner", () => (
        <Button Icon={SpinnerLite} disabled>Loading...</Button>
    ))
    .add("inverted colors", () => (
        <InvertedColorArea>
            <Button inverted colors="primary">Click me</Button>
            <Button inverted colors="primary" Icon={ArrowForwardIcon}>Click me</Button>
            <Button inverted disabled colors="primary">Can't click me</Button>
        </InvertedColorArea>
    ));
