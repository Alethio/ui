import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { Textarea } from "./Textarea";

const TextareaContainer = styled.div`
    display: flex;
    padding: 8px;
    width: 400px;

    > * + * {
        margin-left: 16px;
    }
`;

storiesOf("control/" + Textarea.displayName, module)
    .addDecorator(storyFn => <TextareaContainer>{storyFn()}</TextareaContainer>)
    .add("default", () => (
        [
            <Textarea id="myTextarea" name="myTextarea" placeholder="Enter text here ..." />,
            <Textarea id="myTextarea" name="myTextarea" disabled placeholder="Can't edit me" />
        ]
    ));
