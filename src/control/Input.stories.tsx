import React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./Input";
import styled from "../styled-components";
import { SearchIcon } from "../icon/SearchIcon";
import { StatusOkIcon } from "../icon/StatusOkIcon";

const InputContainer = styled.div`
    display: flex;
    padding: 8px;
    width: 400px;

    > * + * {
        margin-left: 16px;
    }
`;

storiesOf("control/" + Input.name, module)
    .addDecorator(storyFn => <InputContainer>{storyFn()}</InputContainer>)
    .add("default", () => <Input name="myInput" placeholder="Enter text here ..." />)
    .add("disabled", () => <Input name="myInput" disabled placeholder="Can't edit me" />)
    .add("icons", () => <Input LeftIcon={SearchIcon} RightIcon={StatusOkIcon} placeholder="With icons" />)
    .add("alignRight", () => <Input alignRight />);
