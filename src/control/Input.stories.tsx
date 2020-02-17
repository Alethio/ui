import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./Input";
import styled from "styled-components";

const InputContainer = styled.div`
    display: flex;
    padding: 8px;
    width: 400px;

    > * + * {
        margin-left: 16px;
    }
`;

storiesOf("control/" + Input.displayName, module)
    .addDecorator(storyFn => <InputContainer>{storyFn()}</InputContainer>)
    .add("default", () => (
        [
            <Input id="myInput" name="myInput" placeholder="Enter text here ..." />,
            <Input id="myInput" name="myInput" disabled placeholder="Can't edit me" />
        ]
    ));
