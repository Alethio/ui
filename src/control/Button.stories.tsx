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
    .addDecorator(storyFn => <ButtonContainer>{storyFn()}</ButtonContainer>)
    .add("default (secondary)", () => (
        <Button onClick={() => alert("Boo!")}>Click me</Button>
    ))
    .add("primary", () => (
        <Button colors="primary">Click me</Button>
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
        <Button floating>Click me</Button>
    ))
    .add("disabled", () => (
        <Button Icon={ArrowForwardIcon} disabled>Can't click me</Button>
    ))
    .add("with spinner", () => (
        <Button Icon={SpinnerLite} disabled>Loading...</Button>
    ));
