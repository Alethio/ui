import React from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Button } from "./Button";
import styled from "../styled-components";

const CheckboxContainer = styled.div`
    display: flex;
    padding: 8px;

    & > * {
        margin-left: 8px;
    }
`;

storiesOf("control/" + Checkbox.name, module)
    .addParameters({
        info: {
            propTablesExclude: [CheckboxContainer]
        }
    })
    .addDecorator(storyFn => <CheckboxContainer>{storyFn()}</CheckboxContainer>)
    .add("default", () => (
        <Checkbox name="myCheckbox" value="someValue" />
    ))
    .add("checked", () => (
        <Checkbox name="myCheckbox" value="someValue" checked />
    ))
    .add("label", () => (
        <Checkbox name="myCheckbox" value="someValue">Label<br />second line</Checkbox>
    ))
    .add("disabled", () => [
        <Checkbox name="myCheckbox" value="someValue" disabled>Disabled<br />second line</Checkbox>,
        <Checkbox name="myCheckbox" value="someValue" checked disabled>Checked<br />and disabled</Checkbox>
    ])
    .add("group", () => ([
        <form onSubmit={(e) => {
            e.preventDefault();
            alert("Selected " + new FormData(e.target as HTMLFormElement).get("myCheckbox"));
        }}>
            <Checkbox name="myCheckbox" value="first">First item<br />With description</Checkbox>
            <Checkbox name="myCheckbox" value="second" checked>Second item<br />Extra line</Checkbox>
            <Checkbox name="myCheckbox" value="third" disabled>Third item</Checkbox>
            <br />
            <Button type="submit" colors="primary">Submit</Button>
        </form>
    ]));
